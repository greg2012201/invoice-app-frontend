import React, { FC } from 'react';
import { Typography, AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Wrapper, Icon } from './TobBar.styles';
import Account from './Account';

interface Props {
    handleDrawerToggle: () => void;
}

const TopBar: FC<Props> = ({ handleDrawerToggle }) => {
    return (
        <AppBar position="fixed" sx={Wrapper}>
            <Toolbar variant="dense">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={Icon}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="h1">
                    Invoice App
                </Typography>
            </Toolbar>
            <Account />
        </AppBar>
    );
};

export default TopBar;
