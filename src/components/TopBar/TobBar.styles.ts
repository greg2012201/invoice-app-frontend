import { DRAWER_WIDTH } from 'constants/navigation';

export const Wrapper = {
    display: 'flex',
    justifyContent: 'center',
    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
    ml: { sm: `${DRAWER_WIDTH}px` },
    height: '64px',
};
export const Icon = { mr: 2, display: { sm: 'none' } };
