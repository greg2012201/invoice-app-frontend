import { Box } from '@mui/material';
import LoginForm from 'components/LoginForm';
import React, { FC } from 'react';

const Login: FC = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <LoginForm />
        </Box>
    );
};

export default Login;
