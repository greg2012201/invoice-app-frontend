import React, { FC } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'themes/mainTheme';

interface Props {
    children: JSX.Element;
}

const AppProviders: FC<Props> = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProviders;
