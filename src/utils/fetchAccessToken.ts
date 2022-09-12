import { setAccessToken } from './accessToken';

export const fetchAccessToken = (onSuccess?: () => void): void => {
    /* eslint-disable-next-line */
    fetch(process.env.REFRESH_TOKEN_URL!, {
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
