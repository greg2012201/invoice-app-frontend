import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { EmotionCache } from '@emotion/cache';
import DashboardTemplate from 'templates/DashboardTemplate';
import AppProviders from 'providers/AppProviders';
import { useRouter } from 'next/router';
import { NormalizedCacheObject } from '@apollo/client';
import createEmotionCache from '../utils/createEmotionCache';

interface MyAppProps extends AppProps {
    emotionCache: EmotionCache;
    apolloState: NormalizedCacheObject;
}

const clientSideEmotionCache = createEmotionCache();
const MyApp = ({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
    apolloState,
}: MyAppProps): JSX.Element => {
    const router = useRouter();
    return (
        <AppProviders apolloState={apolloState} emotionCache={emotionCache}>
            <CssBaseline>
                {router.asPath === '/login' ? (
                    <Component {...pageProps} />
                ) : (
                    <DashboardTemplate>
                        <Component {...pageProps} />
                    </DashboardTemplate>
                )}
            </CssBaseline>
        </AppProviders>
    );
};

export default MyApp;
