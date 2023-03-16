import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import PermissionsDashboard from './PermissionsDashboard';

export function PermissionsContainer(): JSX.Element {
    return (
        <Routes>
            <Route index element={<PermissionsDashboard />} />
        </Routes>
    );
}
