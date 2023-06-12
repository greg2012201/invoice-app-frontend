import type { TToken } from '@/shared/types/shared';

const isSSR = typeof window === 'undefined';

const getRefreshTokenUrl = (): string | undefined => {
    return isSSR
        ? process.env.REFRESH_TOKEN_URL
        : process.env.NEXT_PUBLIC_TOKEN_URL;
};

export const fetchAccessToken = (refreshToken: TToken): Promise<Response> => {
    const refreshTokenURL = getRefreshTokenUrl();
    if (typeof refreshTokenURL !== 'string') {
        throw new TypeError('Invalid refreshToken type. String is expected.');
    }
    return fetch(`${refreshTokenURL}`, {
        method: 'POST',
        credentials: 'include',
        headers: { Cookie: `jid=${refreshToken}` },
    });
};
