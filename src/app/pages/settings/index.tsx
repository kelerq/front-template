import { TabsNavigator } from 'app/components/TabsNavigator';
import React from 'react';
import { UsersContainer } from './users';
import { PermissionsContainer } from './permissions';
import { AccountContainer } from './account';

export function SettingsContainter(): JSX.Element {
    const tabs = [
        {
            name: 'Moje konto',
            component: <AccountContainer />,
            path: 'account',
        },
        {
            name: 'Użytkownicy',
            component: <UsersContainer />,
            path: 'users',
        },
        {
            name: 'Zezwolenia',
            component: <PermissionsContainer />,
            path: 'permissions',
        },
    ];
    return <TabsNavigator tabs={tabs} path={'settings'} routing />;
}
