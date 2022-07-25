import React, { FC } from 'react';
import { Toolbar, Divider, Typography, Drawer, Box } from '@mui/material';
import { DRAWER_WIDTH } from 'constants/navigation';
import NavigationTabs from './NavigationTabs';

interface Props {
    mobileOpen: boolean;
    handleDrawerToggle: () => void;
}

const LeftBar: FC<Props> = ({ mobileOpen, handleDrawerToggle }) => {
    const container = window.document.body;
    const drawer = (
        <div>
            <Toolbar>
                <Typography>Invoice App</Typography>
            </Toolbar>
            <Divider />
            <NavigationTabs />
        </div>
    );
    return (
        <Box
            component="nav"
            sx={{ width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } }}
            aria-label="sections"
        >
            <Drawer
                container={container}
                variant="temporary"
                onClose={handleDrawerToggle}
                open={mobileOpen}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        width: DRAWER_WIDTH,
                    },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default LeftBar;
