import React, { FC } from 'react';
import LandingHeader from 'shared-ui/organisms/LandingHeader';
import { AuthorizationRoutes } from './Authorization.routes';

export const AuthorizationTemplate: FC = () => {
    return (
        <>
            <LandingHeader />
            <main className="pt-[var(--navigation-height)]">
                <AuthorizationRoutes />
            </main>
        </>
    );
};
