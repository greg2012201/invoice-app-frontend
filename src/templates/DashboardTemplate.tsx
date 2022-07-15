import React, { FC } from 'react';
import { Box, Toolbar } from '@mui/material';
import { DRAWER_WIDTH } from 'constants/navigation';
import Navigation from 'templates/Navigation';

const DashboardTemplate: FC = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navigation />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                }}
            >
                <Toolbar />
                <div>content</div>
            </Box>
        </Box>
    );
};

export default DashboardTemplate;
