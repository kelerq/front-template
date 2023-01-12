import { useDispatch, useSelector } from 'react-redux';
import { Routes, useNavigate } from 'react-router-dom';
import { DispatchType } from 'state/configureStore';
import { signupThunk } from 'state/global/authorization/reducer';
import { ApplicationState } from 'state/applicationState';
import React from 'react';
import { SignupForm } from './components/signupForm';
import { Route } from 'react-router-dom';
import { SignupInfo } from './components/signupInfo';

export function SignupContainer(): JSX.Element {
    const navigate = useNavigate();
    const dispatch = useDispatch<DispatchType>();
    const signupPending = useSelector((state: ApplicationState) => state.authorization.signupPending);
    const loginError = useSelector((state: ApplicationState) => state.authorization.loginError);

    const signup = form => dispatch(signupThunk(form)).then(() => navigate('/im/auth/signup/success'));

    return (
        <Routes>
            <Route index element={<SignupForm pending={signupPending} loginError={loginError} onSubmit={signup} />} />
            <Route path="success" element={<SignupInfo />} />
        </Routes>
    );
}
