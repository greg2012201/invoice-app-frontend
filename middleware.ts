import { NextRequest, NextResponse } from 'next/server';

export const middleware = async (
    req: NextRequest
): Promise<NextResponse | unknown> => {
    const { cookies } = req;
    const jid = cookies.get('jid');
    const apiRes = await fetch(`${process.env.REACT_APP_REFRESH_TOKEN_URL}`, {
        method: 'POST',
        credentials: 'include',
        headers: { Cookie: `${jid?.name}=${jid?.value}` },
    }).then(res => res.json());
    const response = NextResponse.next();
    response.cookies.set('access_token', apiRes.accessToken);

    return response;
};
