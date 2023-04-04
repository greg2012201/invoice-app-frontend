const isSSR = typeof window === 'undefined';

const getRefreshTokenUrl = (): string | undefined => {
    return isSSR
        ? process.env.REFRESH_TOKEN_URL
        : process.env.NEXT_PUBLIC_TOKEN_URL;
};

const isRequestRecord = (value: any): value is Record<string, string> => {
    return typeof value === 'string' && value.includes('=');
};
export const fetchAccessToken = (
    refreshToken: Record<string, string> | undefined
): Promise<Response> => {
    const refreshTokenURL = getRefreshTokenUrl();
    if (typeof refreshTokenURL !== 'string') {
        throw new TypeError('Invalid refreshToken type. String is expected.');
    }
    const headers: HeadersInit = isRequestRecord(refreshToken)
        ? refreshToken
        : {};
    return fetch(`${refreshTokenURL}`, {
        method: 'POST',
        credentials: 'include',
        headers,
    });
};
