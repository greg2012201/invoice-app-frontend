import { setAccessToken } from './accessToken';

export const fetchAccessToken = (onSuccess?: () => void): void => {
    fetch(`${process.env.REACT_APP_REFRESH_TOKEN_URL}`, {
        method: 'POST',
        credentials: 'include',
    }).then(async res => {
        const { accessToken } = await res.json();
        setAccessToken(accessToken);
        if (!onSuccess) {
            return;
        }
        onSuccess();
    });
};
