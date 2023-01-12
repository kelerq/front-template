import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { LoginContainer } from './login';
import { SignupContainer } from './signup';

export function AuthorizationContainer(): JSX.Element {
    return (
        <Routes>
            <Route index path="login" element={<LoginContainer />} />
            <Route path="signup" element={<SignupContainer />} />
        </Routes>
    );
}
