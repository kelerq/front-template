import React, { FC } from 'react';
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
            </body>
        </html>
    );
};
