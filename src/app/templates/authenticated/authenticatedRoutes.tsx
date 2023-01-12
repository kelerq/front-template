import { HomeContainer } from 'app/pages/home';
import { UiContainer } from 'app/pages/ui';
import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const AuthenticatedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/im/home" element={<HomeContainer />} />
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/im/ui" element={<UiContainer />} />
            {/* <Route path="/im/user" ={UserContainer} /> */}
        </Routes>
    );
};
