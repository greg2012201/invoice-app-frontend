import React, { FC } from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, matchPath, useLocation } from 'react-router-dom';
import { SECTIONS } from 'constants/navigation';
import { Wrapper, Item } from './NavigationTabs.styles';

interface Match {
    pattern?: {
        path: string;
    };
}
const NavigationTabs: FC = () => {
    const { pathname } = useLocation();
    const getRouteMatch = (patterns: readonly string[]): Match | null => {
        /* eslint-disable-next-line */
        for (const pattern of patterns) {
            const possibleMatch = matchPath(pattern, pathname);
            if (possibleMatch !== null) {
                return possibleMatch;
            }
        }

        return null;
    };
    const routeMatch = getRouteMatch(SECTIONS.map(({ path }) => path));
    const currentTab = routeMatch?.pattern?.path;
    return (
        <Tabs sx={Wrapper} value={currentTab} orientation="vertical">
            {SECTIONS.map(({ name, path }) => (
                <Tab
                    label={name}
                    key={name}
                    value={path}
                    to={path}
                    component={Link}
                    sx={Item}
                />
            ))}
        </Tabs>
    );
};

export default NavigationTabs;
