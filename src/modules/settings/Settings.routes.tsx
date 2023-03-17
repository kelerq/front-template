import { TabsNavigator } from 'shared-ui/organisms/TabsNavigator';
import React, { Suspense } from 'react';
import { UsersContainer } from './features/users/UsersContainer';
import PermissionsContainer from './features/permissions/PermissionsContainer';
import { AccountContainer } from './features/account/AccountContainer';

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
