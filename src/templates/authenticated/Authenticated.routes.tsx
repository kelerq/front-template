import { AdminRoutes } from 'modules/admin/Admin.routes';
import HomeRoutes from 'modules/home/Home.routes';
import { SettingsRoutes } from 'modules/settings/Settings.routes';
import { UserRoutes } from 'modules/user/User.routes';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ConfirmEmailPage } from 'shared-ui/pages/confirm-email';

export const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoutes />} />
            <Route path="/im/home" element={<HomeRoutes />} />
            <Route path="/im/settings/*" element={<SettingsRoutes />} />
            <Route path="/im/admin/*" element={<AdminRoutes />} />
            <Route path="/im/user/*" element={<UserRoutes />} />
            <Route path="/change-email" element={<ConfirmEmailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
