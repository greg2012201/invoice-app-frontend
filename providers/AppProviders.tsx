import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { ApolloProvider } from '@apollo/client';

import { apolloClientConfig } from 'utils/apolloClientConfig';

interface Props {
    children: JSX.Element;
}
const client = apolloClientConfig;
const AppProviders: FC<Props> = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ApolloProvider>
    );
};
export default AppProviders;
