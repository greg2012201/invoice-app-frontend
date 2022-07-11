import React, { FC } from 'react';
import { Box } from '@mui/material';
import TopBar from 'components/TopBar';
import { DRAWER_WIDTH } from 'constants/navigation';

const DashboardTemplate: FC = () => {
    return (
        <>
            <TopBar handleDrawerToggle={() => true} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                }}
            >
                content
            </Box>
        </>
    );
};

export default DashboardTemplate;
