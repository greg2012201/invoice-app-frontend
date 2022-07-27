import { DRAWER_WIDTH } from 'constants/navigation';

export const Wrapper = {
    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
    ml: { sm: `${DRAWER_WIDTH}px` },
};
export const Icon = { mr: 2, display: { sm: 'none' } };
