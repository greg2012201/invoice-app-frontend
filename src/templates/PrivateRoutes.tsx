import React, { FC } from 'react';
import { Navigate } from 'react-router';
import { useQuery } from '@apollo/client';
import { GET_ME } from 'queries/getMe';

interface Props {
    children: JSX.Element;
}

const PrivateRoutes: FC<Props> = ({ children }) => {
    const { data, loading } = useQuery(GET_ME);
    const isUser = data?.getMe?.id;
    if (loading) {
        return <p>loading...</p>;
    }
    if (!isUser) {
        return <Navigate replace to="/login" />;
    }
    return children;
};

export default PrivateRoutes;
