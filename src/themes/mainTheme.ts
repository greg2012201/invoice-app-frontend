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
        };
    }
}

export const theme = createTheme({
    typography: {
        fontSize: 12,
    },
});
