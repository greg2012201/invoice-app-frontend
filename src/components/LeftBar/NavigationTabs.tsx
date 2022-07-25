import React, { FC } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { SECTIONS } from 'constants/navigation';

interface Match {
    pattern?: {
        path: string;
    };
}
const NavigationTabs: FC = () => {
    const { pathname } = useLocation();
    const getRouteMatch = (patterns: readonly string[]): Match | null => {
        let output = null;
        patterns.forEach((pattern: string) => {
            const possibleMatch = matchPath(pattern, pathname);
            if (possibleMatch !== null) {
                output = possibleMatch;
            }
        });

        return output;
    };
    const routeMatch = getRouteMatch(SECTIONS.map(({ path }) => path));
    const currentTab = routeMatch?.pattern?.path;
    return (
        <Tabs value={currentTab} orientation="vertical">
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
