import React, { FC } from 'react';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const TopBar: FC = () => {
    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="h1">
                    Invoice App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default TopBar;
