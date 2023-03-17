import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { UserEditContainer } from './features/edit/UserEditContainer';
import UserInfoContainer from './features/info/UserInfoContainer';

export function UserRoutes(): JSX.Element {
    return (
        <Routes>
            <Route index path=":id/info" element={<UserInfoContainer />} />
            <Route path=":id/edit" element={<UserEditContainer />} />
        </Routes>
    );
}
