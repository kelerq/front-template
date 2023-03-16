import { TabsNavigator } from 'shared-ui/organisms/TabsNavigator';
import React, { Suspense } from 'react';
import { AccountContainer } from 'modules/settings/features/account';
import { PermissionsContainer } from './features/permissions';
import { UsersContainer } from './features/users/UsersContainer';

export function SettingsRoutes(): JSX.Element {
    const tabs = [
        {
            name: 'Moje konto',
            container: <AccountContainer />,
            path: 'account',
        },
        {
            name: 'Użytkownicy',
            container: <UsersContainer />,
            path: 'users',
        },
        {
            name: 'Zezwolenia',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <PermissionsContainer />
                </Suspense>
            ),
            path: 'permissions',
        },
    ];
    return <TabsNavigator tabs={tabs} path={'settings'} routing />;
}
