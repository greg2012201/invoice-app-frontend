import React, { FC } from 'react';
import { Tabs, Tab } from '@mui/material';
import { useRouter } from 'next/router';
import { SECTIONS } from 'constants/navigation';
import Link from 'next/link';
import { Wrapper, Item } from './NavigationTabs.styles';

interface Match {
    pattern?: {
        path: string;
    };
}
interface Props {
    handleDrawerToggle: () => void;
}
const NavigationTabs: FC<Props> = ({ handleDrawerToggle }) => {
    const { asPath } = useRouter();
    const getRouteMatch = (patterns: readonly string[]): Match | null => {
        /* eslint-disable-next-line */
        for (const pattern of patterns) {
            const possibleMatch =
                pattern === asPath ? { pattern: { path: pattern } } : null;
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
                    href={path}
                    component={Link}
                    sx={Item}
                    onClick={handleDrawerToggle}
                />
            ))}
        </Tabs>
    );
};

export default NavigationTabs;
