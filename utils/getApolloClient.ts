import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    ApolloLink,
    Observable,
    NormalizedCacheObject,
} from '@apollo/client';
import { TokenRefreshLink } from 'apollo-link-token-refresh';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { onError } from '@apollo/client/link/error';
import jwtDecode from 'jwt-decode';
import { CookieValueTypes, getCookie, setCookie } from 'cookies-next';
import { TToken, isString } from '@/shared/types/shared';
import { fetchAccessToken } from './fetchAccessToken';

function headerToString<T>(header: T): string | null {
    if (typeof header === 'string') {
        return header;
    }
    if (typeof header === 'number') {
        return header.toString();
    }
    if (Array.isArray(header)) {
        return header.reduce((a, b) => a + b);
    }
    return null;
}

function extractAccessToken<T>(maybeHeaderWithAccessToken: T): TToken {
    if (!isString(maybeHeaderWithAccessToken)) {
        return null;
    }
    const match = maybeHeaderWithAccessToken.match(/access_token=([^;]+)/);
    return match ? match[1] : null;
}

const uri: string | undefined = `${
    process.env.API_URI || 'http://localhost:4000/graphql'
}`;
const requestLink = (externalAccessToken: TToken): ApolloLink =>
    /* eslint-disable-next-line */
    {
        return new ApolloLink(
            (operation, forward) =>
                /* eslint-disable-next-line */
                new Observable(observer => {
                    let handle: { unsubscribe: () => void };
                    Promise.resolve(operation)
                        /* eslint-disable-next-line */
                        .then(operation => {
                            /* eslint-disable-next-line */
                            const accessToken =
                                /* eslint-disable-next-line */
                                externalAccessToken ||
                                getCookie('access_token');
                            if (accessToken) {
                                operation.setContext({
                                    headers: {
                                        authorization: `bearer ${accessToken}`,
                                    },
                                });
                            }
                        })
                        .then(() => {
                            handle = forward(operation).subscribe({
                                next: observer.next.bind(observer),
                                error: observer.error.bind(observer),
                                complete: observer.complete.bind(observer),
                            });
                        })
                        .catch(observer.error.bind(observer));

                    return () => {
                        if (handle) handle.unsubscribe();
                    };
                })
        );
    };
const tokenRefreshLink = (
    externalAccessToken: TToken,
    refreshToken: TToken
): TokenRefreshLink<string> => {
    return new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
            /* eslint-disable-next-line */
            const token: TToken | CookieValueTypes =
                externalAccessToken || getCookie('access_token');

            if (!token) {
                return true;
            }

            try {
                const { exp }: { exp: number } = jwtDecode(token as string);
                if (Date.now() >= exp * 1000) {
                    return false;
                    /* eslint-disable-next-line */
                } else {
                    return true;
                }
            } catch {
                return false;
            }
        },
        fetchAccessToken: () => {
            return fetchAccessToken(refreshToken);
        },
        handleFetch: accessToken => {
            setCookie('access_token', accessToken);
        },
        handleError: err => {
            console.warn('Your refresh token is invalid. Try to relogin');
            console.error(err);
        },
    });
};

export const getApolloClient = (
    initialState: NormalizedCacheObject,
    accessToken?: TToken,
    refreshToken?: TToken
): ApolloClient<NormalizedCacheObject> =>
    /* eslint-disable-next-line */
    {
        return new ApolloClient({
            ssrMode: typeof window === 'undefined',
            link: ApolloLink.from([
                tokenRefreshLink(accessToken, refreshToken),
                onError(({ graphQLErrors, networkError }) => {
                    console.log(graphQLErrors);
                    console.log(networkError);
                }),
                requestLink(accessToken),
                // inject the access token passed from SSR
                new HttpLink(
                    typeof refreshToken === 'string'
                        ? {
                              uri,
                              headers: { Cookie: `jid=${refreshToken}` },
                              credentials: 'include',
                          }
                        : {
                              uri,
                              credentials: 'include',
                          }
                ),
            ]),
            cache: new InMemoryCache().restore(initialState),
        });
    };
type GetServerSidePropsWithApollo<PageProps> = {
    (
        context: GetServerSidePropsContext,
        apolloClient: ApolloClient<NormalizedCacheObject>
    ): Promise<PageProps>;
};
/* eslint-disable-next-line */
export const withApolloClient =
    <PageProps>(getServerSideProps: GetServerSidePropsWithApollo<PageProps>) =>
    /* eslint-disable-next-line */
    async (context: GetServerSidePropsContext) => {
        /* eslint-disable-next-line */
        const parsedHeader = headerToString(
            context.res.getHeader('set-cookie')
        );
        /* eslint-disable-next-line */
        const accessToken =
            /* eslint-disable-next-line */
            context.req.cookies?.access_token ||
            extractAccessToken(parsedHeader);

        const refreshToken: TToken = context.req.cookies.jid;
        const apolloClient = getApolloClient({}, accessToken, refreshToken);
        const pageProps = await getServerSideProps(context, apolloClient);
        const apolloState = apolloClient.cache.extract();
        return { props: { ...pageProps, apolloState } };
    };
