import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'state/global/authorization/reducer';
import { ApplicationState } from 'state/applicationState';
import { DispatchType } from 'state/configureStore';
import { Link } from 'react-router-dom';

export function UserManager() {
    const dispatch = useDispatch<DispatchType>();
    const loggedUser = useSelector((state: ApplicationState) => state.authorization.authenticated);

    const logout = () => dispatch(logoutThunk());

    if (!loggedUser) {
        return <></>;
    }
    return <></>;
}
