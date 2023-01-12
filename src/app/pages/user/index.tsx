import { TabsNavigator } from 'app/components/TabsNavigator';
import React from 'react';
import { UserInfoContainer } from './userInfo';
import { UsersContainer } from './users';
import { PermissionsContainer } from './permissions';

export function UserContainer(): JSX.Element {
    // const { path } = useRouteMatch();
    const tabs = [
        {
            name: 'Moje konto',
            component: <UserInfoContainer />,
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
    return <TabsNavigator tabs={tabs} path={'path'} />;
}
