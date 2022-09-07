import React, { FC } from 'react';
import DashboardTemplate from 'templates/DashboardTemplate';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'Pages/Login';
import IssueInvoice from 'Pages/IssueInvoice';

const Root: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardTemplate />}>
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
