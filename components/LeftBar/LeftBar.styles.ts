import { DRAWER_WIDTH } from 'constants/navigation';

export const Wrapper = { width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } };
export const NavBar = {
    display: { xs: 'none', sm: 'block' },
    '& .MuiDrawer-paper': {
        boxSizing: 'border-box',
        width: DRAWER_WIDTH,
    },
};
