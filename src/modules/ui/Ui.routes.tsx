import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { ButtonExamplesContainer } from './features/buttons-examples/ButtonExamplesContainer';

export function UiRoutes(): JSX.Element {
    return (
        <Routes>
            <Route index element={<ButtonExamplesContainer />} />
        </Routes>
    );
}
