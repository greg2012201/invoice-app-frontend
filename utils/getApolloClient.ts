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
import { fetchAccessToken } from './fetchAccessToken';

const uri: string | undefined = `${
    process.env.REACT_APP_API_URI || 'http://localhost:4000/graphql'
}`;
const requestLink = (externalAccessToken: string | undefined): ApolloLink =>
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
    externalAccessToken: string | undefined
): TokenRefreshLink<string> => {
    return new TokenRefreshLink({
        accessTokenField: 'accessToken',
        isTokenValidOrUndefined: () => {
            /* eslint-disable-next-line */
            const token: CookieValueTypes =
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
            return fetchAccessToken();
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
    accessToken?: string
): ApolloClient<NormalizedCacheObject> =>
    /* eslint-disable-next-line */
    {
        return new ApolloClient({
            ssrMode: typeof window === 'undefined',
            link: ApolloLink.from([
                tokenRefreshLink(accessToken),
                onError(({ graphQLErrors, networkError }) => {
                    console.log(graphQLErrors);
                    console.log(networkError);
                }),
                requestLink(accessToken),
                // inject the access token passed from SSR
                new HttpLink({
                    uri,
                    credentials: 'include',
                }),
            ]),
            cache: new InMemoryCache().restore(initialState),
        });
    };
interface GetServerSidePropsWithApollo {
    (
        context: GetServerSidePropsContext,
        apolloClient: ApolloClient<NormalizedCacheObject>
    ): GetServerSideProps;
}
/* eslint-disable-next-line */
export const withApolloClient =
    (context: GetServerSidePropsContext) =>
    /* eslint-disable-next-line */
    async (getServerSideProps: GetServerSidePropsWithApollo) => {
        /* eslint-disable-next-line */
        const apolloClient = getApolloClient({});
        const pageProps = getServerSideProps(context, apolloClient);
        const apolloState = apolloClient.cache.extract();
        return { ...pageProps, apolloState };
    };
