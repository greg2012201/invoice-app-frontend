import React, { FC, useState } from 'react';
import TopBar from 'components/TopBar';
import LeftBar from 'components/LeftBar';
import { useWindowSize } from 'hooks/useWindowSize';

const Navigation: FC = () => {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { width } = useWindowSize();
    const handleDrawerToggle: () => void = () => {
        if (width >= 600) {
            return;
        }
        setMobileOpen((prevState: boolean) => !prevState);
    };
    return (
        <>
            <TopBar handleDrawerToggle={handleDrawerToggle} />
            <LeftBar
                handleDrawerToggle={handleDrawerToggle}
                mobileOpen={mobileOpen}
            />
        </>
    );
};

export default Navigation;
