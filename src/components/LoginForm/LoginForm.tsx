import React, { FC, useState } from 'react';
import { Card, CardHeader, Typography, Box, CardContent } from '@mui/material';

import { Footer, FooterMessage, TextButton } from './LoginForm.styles';
import InputFieldGroup from './InputFieldGroup';

type Mode = 'login' | 'register';

const LoginForm: FC = () => {
    const defaultMode = 'login';
    const [mode, setMode] = useState<Mode>(defaultMode);
    const handleChangeMode = (): void => {
        /* eslint-disable-next-line */
        setMode(prevState => {
            return prevState === defaultMode ? 'register' : defaultMode;
        });
    };

    return (
        <Card>
            <CardHeader
                title="Welcome 👋"
                subheader="Please log in to get access to the app."
            />
            <CardContent>
                <InputFieldGroup />
            </CardContent>
            <Box sx={Footer}>
                <Typography sx={FooterMessage}>
                    Would you like to{' '}
                    <TextButton onClick={handleChangeMode} type="button">
                        <Typography sx={FooterMessage}>
                            {mode === 'login' ? 'create new account' : 'log in'}
                        </Typography>
                    </TextButton>
                    ?
                </Typography>
            </Box>
        </Card>
    );
};

export default LoginForm;
