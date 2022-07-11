import React, { FC } from 'react';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { DRAWER_WIDTH } from 'constants/navigation';

interface Props {
    handleDrawerToggle: () => void;
}

const TopBar: FC<Props> = ({ handleDrawerToggle }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
                ml: { sm: `${DRAWER_WIDTH}px` },
            }}
        >
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleDrawerToggle}
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
