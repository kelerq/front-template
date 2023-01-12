import { Header } from 'app/components/Header';
import { AuthenticatedRoutes } from 'app/templates/authenticated/authenticatedRoutes';
import React, { FC } from 'react';

export const AuthenticatedTemplate: FC = () => {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, height=device-height,initial-scale=1" />
            </head>
            <body>
                <Header />
                <main className="pt-[var(--navigation-height)]">
                    <AuthenticatedRoutes />
                </main>
            </body>
        </html>
    );
};
