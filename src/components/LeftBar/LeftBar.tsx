import React, { FC } from 'react';
import {
    Toolbar,
    Divider,
    Typography,
    Drawer,
    Box,
    Tabs,
    Tab,
} from '@mui/material';
import {
    MemoryRouter,
    Route,
    Routes,
    Link,
    matchPath,
    useLocation,
} from 'react-router-dom';
import { DRAWER_WIDTH, SECTIONS } from 'constants/navigation';

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
            <Tabs orientation="vertical" centered={false}>
                {SECTIONS.map(({ name, path }) => (
                    <Tab
                        label={name}
                        key={name}
                        value={path}
                        to={path}
                        component={Link}
                        sx={{ alignItems: 'start' }}
                    />
                ))}
            </Tabs>
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
