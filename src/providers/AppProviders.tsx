import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

interface Props {
    children: JSX.Element;
}

const AppProviders: FC<Props> = ({ children }) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
    );
};
export default AppProviders;
