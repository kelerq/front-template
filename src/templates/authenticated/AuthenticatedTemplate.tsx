import React, { FC } from 'react';
import { BottomNavigation } from 'shared-ui/organisms/BottomNavigation';
import { HomeFooter } from 'shared-ui/organisms/HomeFooter';
import { HomeHeader } from 'shared-ui/organisms/HomeHeader';
import { AuthenticatedRoutes } from './Authenticated.routes';

export const AuthenticatedTemplate: FC = () => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, height=device-height,initial-scale=1" />
            </head>
            <body>
                <HomeHeader />
                <main className="pt-[var(--navigation-height)]">
                    <AuthenticatedRoutes />
                </main>
                <BottomNavigation />
                <HomeFooter />
            </body>
        </html>
    );
};
