import { LoadingOverlay } from 'shared-ui/molecules/LoadingOverlay';
import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'shared-state/applicationState';
import { AuthenticatedTemplate } from './authenticated/AuthenticatedTemplate';
import { AuthorizationTemplate } from './authorization/AuthorizationTemplate';

export function App(): JSX.Element {
    const authenticated = useSelector((state: ApplicationState) => state.authorization.authenticated);
    const cachedUserLoginPending = useSelector((state: ApplicationState) => state.authorization.cachedUserLoginPending);
    const loginPending = useSelector((state: ApplicationState) => state.authorization.loginPending);
    const fetchAuthenticatedUserPending = useSelector((state: ApplicationState) => state.users.fetchAuthenticatedUserPending);

    return (
        <>
            {(cachedUserLoginPending || loginPending || fetchAuthenticatedUserPending) && <LoadingOverlay pending />}

            {!authenticated && !cachedUserLoginPending && !loginPending && <AuthorizationTemplate />}

            {authenticated && <AuthenticatedTemplate />}
        </>
    );
}
