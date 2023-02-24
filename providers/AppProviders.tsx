import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { ApolloProvider } from '@apollo/client';

import { apolloClientConfig } from 'utils/apolloClientConfig';
import { CacheProvider, EmotionCache } from '@emotion/react';

interface Props {
    children: JSX.Element;
    emotionCache: EmotionCache;
}
const client = apolloClientConfig;
const AppProviders: FC<Props> = ({ children, emotionCache }) => {
    return (
        <ApolloProvider client={client}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </CacheProvider>
        </ApolloProvider>
    );
};
export default AppProviders;
