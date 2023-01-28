import { Routes } from 'react-router-dom';
import React from 'react';
import { Route } from 'react-router-dom';
import { UserInfoContainer } from './info';
import { UserEditContainer } from './edit';

export function UserContainer(): JSX.Element {
    return (
        <Routes>
            <Route index path=":id/info" element={<UserInfoContainer />} />
            <Route path=":id/edit" element={<UserEditContainer />} />
        </Routes>
    );
}
