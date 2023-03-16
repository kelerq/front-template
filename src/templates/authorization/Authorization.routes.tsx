import { AuthRoutes } from 'modules/auth/Auth.routes';

import HomeRoutes from 'modules/home/Home.routes';
import { UiRoutes } from 'modules/ui/Ui.routes';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AuthorizationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeRoutes />} />
            <Route path="/im/home" element={<HomeRoutes />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/im/auth/*" element={<AuthRoutes />} />
            <Route path="/im/ui/*" element={<UiRoutes />} />
        </Routes>
    );
};
