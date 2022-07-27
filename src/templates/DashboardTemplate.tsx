import React, { FC } from 'react';
import { Box, Toolbar } from '@mui/material';
import Navigation from 'templates/Navigation';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Wrapper } from './DashboardTemplate.styles';

const DashboardTemplate: FC = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            <Box component="main" sx={Wrapper}>
                <Toolbar />
                <Routes>
                    <Route
                        path="/"
                        element={<Navigate replace to="/issue-invoice" />}
                    />
                    <Route
                        path="/issue-invoice"
                        element={<div>Issue invoice page</div>}
                    />
                </Routes>
            </Box>
        </Box>
    );
};

export default DashboardTemplate;
