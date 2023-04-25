import { Box } from '@mui/material';
import LoginForm from 'src/components/LoginForm';
import React, { FC } from 'react';

const Page: FC = () => {
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

export default Page;
