import React from 'react';
import { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';

// import Layout from '../components/layout';
import AppProviders from 'providers/AppProviders';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // Dashboard Layout should be present here in the future
    return (
        <AppProviders>
            <CssBaseline>
                <Component {...pageProps} />
            </CssBaseline>
        </AppProviders>
    );
};

export default MyApp;
