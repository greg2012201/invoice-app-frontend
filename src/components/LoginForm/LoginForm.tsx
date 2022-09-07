import React, { FC, useState } from 'react';
import { Card, CardHeader, Typography, Box, Button } from '@mui/material';
import { Footer, FooterMessage, TextButton } from './LoginForm.styles';

const LoginForm: FC = () => {
    const [mode, setMode] = useState<'login' | 'register'>('login');
    const handleChangeMode = (): void => {
        setMode('login');
    };
    return (
        <Card>
            <CardHeader
                title="Welcome 👋"
                subheader="Please log in to get access to the app."
            />
            <Box sx={Footer}>
                <Typography sx={FooterMessage}>
                    Would you like to{' '}
                    <TextButton onClick={handleChangeMode} type="button">
                        <Typography sx={FooterMessage}>
                            create new account
                        </Typography>
                    </TextButton>
                    ?
                </Typography>
            </Box>
        </Card>
    );
};

export default LoginForm;
