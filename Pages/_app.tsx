import React from 'react';
import { AppProps } from 'next/app';
// import Layout from '../components/layout';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
    // Dashboard Layout should be present here in the future
    return <Component {...pageProps} />;
};

export default MyApp;
