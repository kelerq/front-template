import { useDispatch, useSelector } from 'react-redux';
import { DispatchType } from 'state/configureStore';
import { loginThunk } from 'state/global/authorization/reducer';
import { ApplicationState } from 'state/applicationState';
import React from 'react';
import { LoginForm } from './components/loginForm';
import { redirect, Route, Routes } from 'react-router';

export function LoginContainer(): JSX.Element {
    const dispatch = useDispatch<DispatchType>();
    const loginPending = useSelector((state: ApplicationState) => state.authorization.loginPending);
    const loginCachedUserPending = useSelector((state: ApplicationState) => state.authorization.cachedUserLoginPending);
    const loginError = useSelector((state: ApplicationState) => state.authorization.loginError);

    const authenticate = (email: string, password: string) =>
        dispatch(loginThunk({ email: email, password: password })).then(() => redirect('/'));

    return (
        <Routes>
            <Route
                index
                element={
                    <LoginForm pending={loginPending || loginCachedUserPending} loginError={loginError} onSubmit={authenticate} />
                }
            />
        </Routes>
    );
}
