import React, { FC } from 'react';
import { Box, Toolbar } from '@mui/material';
import Navigation from 'templates/Navigation';
import { Outlet } from 'react-router';
import { Wrapper } from './DashboardTemplate.styles';

const DashboardTemplate: FC = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            <Box component="main" sx={Wrapper}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
};

export default DashboardTemplate;
