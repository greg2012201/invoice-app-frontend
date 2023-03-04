import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { ApolloProvider } from '@apollo/client';

import { getApolloClient } from '@/utils/getApolloClient';
import { CacheProvider, EmotionCache } from '@emotion/react';

interface Props {
    children: JSX.Element;
    emotionCache: EmotionCache;
}
const client = getApolloClient({ isSSR: false });
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
