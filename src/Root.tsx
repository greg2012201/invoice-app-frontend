import React, { FC, useState, useEffect } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'Pages/Login';
import IssueInvoice from 'Pages/IssueInvoice';
import PrivateRoutes from 'templates/PrivateRoutes';
import { fetchAccessToken } from 'utils/fetchAccessToken';

const Root: FC = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchAccessToken(() => setLoading(false));
    }, []);
    if (loading) {
        <p>loading...</p>;
    }
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />

            <Route
                path="/dashboard"
                element={
                    /* eslint-disable-next-line */
                    <PrivateRoutes>
                        <DashboardTemplate />
                    </PrivateRoutes>
                }
            >
                <Route
                    path="/dashboard"
                    element={<Navigate replace to="issue-invoice" />}
                />
                <Route path="issue-invoice" element={<IssueInvoice />} />
            </Route>

            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default Root;
