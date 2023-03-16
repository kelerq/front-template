import React, { FC } from 'react';
import { LandingHeader } from 'shared-ui/organisms/LandingHeader';
import { AuthorizationRoutes } from './Authorization.routes';

export const AuthorizationTemplate: FC = () => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, height=device-height,initial-scale=1" />
            </head>
            <body>
                <LandingHeader />
                <main className="pt-[var(--navigation-height)]">
                    <AuthorizationRoutes />
                </main>
            </body>
        </html>
    );
};
