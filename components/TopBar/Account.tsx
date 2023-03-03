import React, { FC, useState } from 'react';
import { IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useMutation, useQuery } from '@apollo/client';
import { LOGOUT } from 'queries/logout';
import { GET_ME } from '@/queries/getMe';
import { deleteCookie } from 'cookies-next';
import { useRouter } from 'next/router';

const Account: FC = () => {
    const router = useRouter();
    const { data, loading } = useQuery(GET_ME);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [fetchLogout] = useMutation(LOGOUT, {
        onCompleted: (): Promise<boolean> => router.push('/login'),
    });
    const handleOpenMenu = (e: React.MouseEvent<HTMLElement>): void => {
        setAnchorEl(e?.currentTarget);
    };
    const handleCloseMenu = (): void => {
        setAnchorEl(null);
    };
    const handleLogout = (): void => {
        fetchLogout();
        deleteCookie('access_token');
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
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
        </Toolbar>
    );
};

export default Account;
