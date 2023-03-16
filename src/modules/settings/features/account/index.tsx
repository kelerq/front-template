import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { AccountDashboard } from './AccountDashboard';

export function AccountContainer(): JSX.Element {
    return (
        <Routes>
            <Route index element={<AccountDashboard />} />
        </Routes>
    );
}
