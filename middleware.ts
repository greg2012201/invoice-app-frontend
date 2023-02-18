import { RequestCookies } from 'next/dist/server/web/spec-extension/cookies';
import { NextRequest, NextResponse } from 'next/server';

const authFetch = async (
    cookies: RequestCookies
): Promise<{ accessToken: string | undefined }> => {
    const jid = cookies.get('jid');
    return fetch(`${process.env.REACT_APP_REFRESH_TOKEN_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: { Cookie: `${jid?.name}=${jid?.value}` },
    }).then(res => res.json());
};

export const middleware = async (
    req: NextRequest
): Promise<NextResponse | unknown> => {
    const { cookies } = req;
    const authRes = await authFetch(cookies);
    const response = NextResponse.next();
    if (authRes?.accessToken) {
        response.cookies.set('access_token', authRes.accessToken);
    }

    return response;
};
