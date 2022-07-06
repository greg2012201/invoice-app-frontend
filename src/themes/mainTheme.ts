import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        typography: {
            fontSize: number;
        };
    }
    interface TypographyOptions {
        typography?: {
            fontSize?: string;
            subtitle1?: {
                fontSize?: string;
            };
        };
    }
}

export const theme = createTheme({
    typography: {
        fontSize: 10,
        subtitle1: {
            fontSize: 38,
        },
    },
});
