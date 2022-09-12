import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

interface Props {
    children: JSX.Element;
}

const uri: string | undefined = `${process.env.REACT_APP_API_URI}`;

const AppProviders: FC<Props> = ({ children }) => {
    const client = new ApolloClient({
        uri,
        cache: new InMemoryCache(),
    });
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>{children}</ThemeProvider>
            </BrowserRouter>
        </ApolloProvider>
    );
};
export default AppProviders;
