import React, { FC } from 'react';
import { Typography, Container } from '@mui/material';
import TopBar from 'components/TopBar';

const DashboardTemplate: FC = () => {
    return (
        <>
            <TopBar />
            <Container>content</Container>
        </>
    );
};

export default DashboardTemplate;
