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
import { SECTIONS } from 'constants/navigation';

const NavigationTabs: FC = () => {
    return (
        <Tabs orientation="vertical">
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
    );
};

export default NavigationTabs;
