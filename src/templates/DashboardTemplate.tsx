import React, { FC } from 'react';
import { Typography, Container } from '@mui/material';

const DashboardTemplate: FC = () => {
    return (
        <Container>
            <Typography variant="h1" component="h1">
                Invoice App
            </Typography>
        </Container>
    );
};

export default DashboardTemplate;
