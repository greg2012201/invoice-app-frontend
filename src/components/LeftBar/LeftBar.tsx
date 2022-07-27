import React, { FC } from 'react';
import { Toolbar, Divider, Typography, Drawer, Box } from '@mui/material';
import { Wrapper, NavBar } from './LeftBar.styles';
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
            <NavigationTabs handleDrawerToggle={handleDrawerToggle} />
        </div>
    );
    return (
        <Box component="nav" sx={Wrapper} aria-label="sections">
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
            <Drawer variant="permanent" sx={NavBar} open>
                {drawer}
            </Drawer>
        </Box>
    );
};

export default LeftBar;
