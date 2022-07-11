import React, { FC } from 'react';
import {
    Toolbar,
    Divider,
    Typography,
    Drawer,
    Box,
    List,
    ListItem,
    ListItemButton,
} from '@mui/material';
import { DRAWER_WIDTH, SECTIONS } from 'constants/navigation';

const LeftBar: FC = () => {
    const container = window.document.body;
    const drawer = (
        <div>
            <Toolbar>
                <Typography>Invoice App</Typography>
            </Toolbar>
            <Divider />
            <List>
                {SECTIONS.map((section: string) => (
                    <ListItem key={section}>
                        <ListItemButton>{section}</ListItemButton>
                    </ListItem>
                ))}
            </List>
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
                open
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
