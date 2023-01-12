import { AuthorizationContainer } from 'app/pages/authorization';
import { SignupActivation } from 'app/pages/authorization/signup/components/signupActivation';
import { UiContainer } from 'app/pages/ui';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LandingContainer } from '../../pages/landing';

export const AuthorizationRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingContainer />} />
            <Route path="activation" element={<SignupActivation />} />
            <Route path="/im/landing" element={<LandingContainer />} />
            <Route path="/im/auth/*" element={<AuthorizationContainer />} />
            <Route path="/im/ui" element={<UiContainer />} />
        </Routes>
    );
};
