import React, { FC } from 'react';
import { Box, Toolbar } from '@mui/material';
import Navigation from 'templates/Navigation';
import { Wrapper } from './DashboardTemplate.styles';

interface Props {
    children: JSX.Element;
}

const DashboardTemplate: FC<Props> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            <Box component="main" sx={Wrapper}>
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
};

export default DashboardTemplate;
