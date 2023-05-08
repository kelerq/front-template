import React, { FC } from 'react';
import { BottomNavigation } from 'shared-ui/organisms/BottomNavigation';
import { HomeFooter } from 'shared-ui/organisms/HomeFooter';
import { HomeHeader } from 'shared-ui/organisms/HomeHeader';
import { AuthenticatedRoutes } from './Authenticated.routes';

export const AuthenticatedTemplate: FC = () => {
    return (
        <>
            <HomeHeader />
            <main className="pt-[var(--navigation-height)]">
                <AuthenticatedRoutes />
            </main>
            <BottomNavigation />
            <HomeFooter />
        </>
    );
};
