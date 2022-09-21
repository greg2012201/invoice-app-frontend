import React, { FC, useState } from 'react';
import { IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GET_ME } from 'queries/getMe';
import { useQuery } from '@apollo/client';

const Account: FC = () => {
    const { data, loading } = useQuery(GET_ME);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e?.currentTarget);
    };
    const handleCloseMenu = (): void => {
        setAnchorEl(null);
    };
    const logout = (): void => {
        handleCloseMenu();
    };
    if (loading) {
        return null;
    }
    return (
        <Toolbar>
            <Typography>{data?.getMe?.name}</Typography>
            <IconButton
                onClick={handleOpenMenu}
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircleIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
            >
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </Toolbar>
    );
};

export default Account;
