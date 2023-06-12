import { useEffect, useState } from 'react';

type Dimension = {
    width: number;
};
export const useWindowSize = (): Dimension => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    useEffect(() => {
        const handleResize = (): void => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, []);
    return { width };
};
