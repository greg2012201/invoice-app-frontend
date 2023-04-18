import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { GET_ME_STRING } from 'queries/getMe';

interface IAuthResponse {
    ok: boolean;
    accessToken: string;
}

interface IMeResponse {
    id: string;
    email: string;
    name: string;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};

const authFetch = async (cookies: RequestCookies): Promise<IAuthResponse> => {
    const jid = cookies.get('jid');

    return fetch(`${process.env.REFRESH_TOKEN_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: { Cookie: `${jid?.name}=${jid?.value}` },
    }).then(res => res.json());
};
const meFetch = async (cookies: RequestCookies): Promise<IMeResponse> => {
    const accessToken = cookies.get('access_token')?.value;
    return fetch(`${process.env.REACT_APP_API_URI}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            authorization: `bearer ${accessToken}`,
        },
        body: JSON.stringify({
            query: GET_ME_STRING,
        }),
    })
        .then(res => res.json())
        .then(res => res?.data?.getMe)
        .catch(err => console.error(err));
};
export const middleware = async (
    req: NextRequest,
    event: NextFetchEvent
): Promise<NextResponse | unknown> => {
    const { cookies } = req;
    const { pathname } = req.nextUrl;
    const response = NextResponse.next();
    let authRes;
    event.waitUntil(() => {
        authRes = authFetch(cookies);
        if (authRes?.accessToken) {
            response.cookies.set('access_token', authRes.accessToken);
        }
    });

    const meRes = await meFetch(cookies);
    if (!meRes?.id && pathname !== '/login' && !authRes?.ok) {
        const loginUrl = new URL('/login', req.url).toString();
        console.log({ loginUrl });
        return NextResponse.redirect(loginUrl);
    }
    return response;
};
