import { LoadingOverlay } from 'shared-ui/molecules/LoadingOverlay';
import React from 'react';
import { useSelector } from 'react-redux';
import { ApplicationState } from 'shared-state/applicationState';
import { AuthenticatedTemplate } from './authenticated/AuthenticatedTemplate';
import { AuthorizationTemplate } from './authorization/AuthorizationTemplate';

export function App(): JSX.Element {
    const {
        authorization: { authenticated, cachedUserLoginPending, loginPending },
        users: { fetchAuthenticatedUserPending },
    } = useSelector((state: ApplicationState) => state);

    const showLoadingOverlay = cachedUserLoginPending || loginPending || fetchAuthenticatedUserPending;
    const showAuthorizationTemplate = !authenticated && !cachedUserLoginPending && !loginPending;

    return (
        <>
            {showLoadingOverlay && <LoadingOverlay pending />}

            {showAuthorizationTemplate && <AuthorizationTemplate />}

            {authenticated && <AuthenticatedTemplate />}
        </>
    );
}
