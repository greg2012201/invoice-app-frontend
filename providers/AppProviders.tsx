import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/client';

import { getApolloClient } from '@/utils/getApolloClient';
import { CacheProvider, EmotionCache } from '@emotion/react';

interface Props {
    children: JSX.Element;
    emotionCache: EmotionCache;
    apolloState: NormalizedCacheObject;
}
const AppProviders: FC<Props> = ({ children, emotionCache, apolloState }) => {
    const client = getApolloClient(apolloState);
    return (
        <ApolloProvider client={client}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CacheProvider>
        </ApolloProvider>
    );
};
export default AppProviders;
