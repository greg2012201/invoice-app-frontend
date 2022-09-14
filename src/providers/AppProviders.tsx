import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import { apolloClientConfig } from 'utils/apolloClientConfig';

interface Props {
    children: JSX.Element;
}
const client = apolloClientConfig();
const AppProviders: FC<Props> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    );
};
export default AppProviders;
