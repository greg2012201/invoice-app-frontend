import { DRAWER_WIDTH } from 'constants/navigation';

export const Wrapper = {
    flexGrow: 1,
    p: 3,
    width: { sm: `calc(100% - ${DRAWER_WIDTH}px)` },
};
