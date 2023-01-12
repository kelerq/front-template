import React, { FC } from 'react';
import { Header } from 'app/components/Header';
import { AuthorizationRoutes } from './authorizationRoutes';

export const AuthorizationTemplate: FC = () => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, height=device-height,initial-scale=1" />
            </head>
            <body>
                <Header isLanding />
                <main className="pt-[var(--navigation-height)]">
                    <AuthorizationRoutes />
                </main>
            </body>
        </html>
    );
};
