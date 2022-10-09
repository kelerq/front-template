import { LoginForm } from './LoginForm';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { DispatchType } from 'state/configureStore';
import { loginThunk } from 'state/global/authorization/reducer';

export function paAuthorizationPage() {
    const dispatch = useDispatch<DispatchType>();
    const history = useHistory();

    // const loginPending = useSelector((state: ApplicationState) => state.authorization.loginPending);
    // const loginError = useSelector((state: ApplicationState) => state.authorization.loginError);

    const authenticate = (username: string, password: string) =>
        dispatch(loginThunk({ username, password })).then(r => history.replace('/'));
    return <LoginForm pending={loginPending} loginError={loginError} onSubmitLogin={authenticate} />;
}
