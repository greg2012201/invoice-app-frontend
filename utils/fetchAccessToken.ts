const isSSR = typeof window === 'undefined';

export const fetchAccessToken = (): Promise<Response> => {
    // 'need to inject refresh token too to enable serverside'
    const refreshTokenURL = isSSR
        ? process.env.REFRESH_TOKEN_URL
        : process.env.NEXT_PUBLIC_TOKEN_URL;
    // fix envs
    return fetch(`${refreshTokenURL}`, {
        method: 'POST',
        credentials: 'include',
    });
};
