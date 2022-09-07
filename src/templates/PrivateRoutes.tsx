import React, { FC } from 'react';
import { Navigate } from 'react-router';

interface Props {
    children: JSX.Element;
}

const user = { id: null };

const PrivateRoutes: FC<Props> = ({ children }) => {
    const isUser = user?.id;

    if (!isUser) {
        return <Navigate replace to="/login" />;
    }
    return children;
};

export default PrivateRoutes;
