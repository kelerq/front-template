import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { LoginContainer } from './features/login/LoginContainer';
import { SignupFormContainer } from './features/signup-form/SignupFormContainer';
import { SignupInfoContainer } from './features/signup-info/SignupInfoContainer';

export function AuthRoutes(): JSX.Element {
    return (
        <Routes>
            <Route index path="login" element={<LoginContainer />} />
            <Route path="signup" element={<SignupFormContainer />} />
            <Route path="signup/success" element={<SignupInfoContainer />} />
        </Routes>
    );
}
