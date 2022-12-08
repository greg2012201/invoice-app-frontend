import { setAccessToken } from './accessToken';

export const fetchAccessToken = (): Promise<Response> => {
    return fetch(`${process.env.REACT_APP_REFRESH_TOKEN_URL}`, {
        method: 'POST',
        credentials: 'include',
    });
};

export const handleFetchAccessToken = (onSuccess?: () => void): void => {
    fetchAccessToken().then(async res => {
        const { accessToken } = await res.json();
        setAccessToken(accessToken);
        if (!onSuccess) {
            return;
        }
        onSuccess();
    });
};
