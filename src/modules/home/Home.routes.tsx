import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { LandingContainer } from './features/landing/LandingContainer';

export default function HomeRoutes(): JSX.Element {
    return (
        <Routes>
            <Route index element={<LandingContainer />} />
        </Routes>
    );
}
