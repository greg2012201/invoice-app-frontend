import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { EmotionCache } from '@emotion/cache';

// import Layout from '../components/layout';
import AppProviders from 'providers/AppProviders';
import createEmotionCache from '../utils/createEmotionCache';

interface MyAppProps extends AppProps {
    emotionCache: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const MyApp = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}: MyAppProps): JSX.Element => {
    // Dashboard Layout should be present here in the future
    return (
        <AppProviders emotionCache={emotionCache}>
            <CssBaseline>
                <Component {...pageProps} />
            </CssBaseline>
        </AppProviders>
    );
};

export default MyApp;
