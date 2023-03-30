import { TabsNavigator } from 'shared-ui/organisms/TabsNavigator';
import React, { Suspense } from 'react';
import { UsersContainer } from './features/users/UsersContainer';
import PermissionsContainer from './features/permissions/PermissionsContainer';
import { UsersIcon, PermissionsIcon, UIIcon } from 'assets/icons/icons';
import { UIContainer } from './features/ui/UIContainer';

export function SettingsRoutes(): JSX.Element {
    const tabs = [
        {
            name: 'Użytkownicy',
            container: <UsersContainer />,
            path: 'users',
            icon: <UsersIcon className="w-[24px] h-[24px]" viewBox="0 0 24 24" />,
        },
        {
            name: 'Uprawnienia',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <PermissionsContainer />
                </Suspense>
            ),
            path: 'permissions',
            icon: <PermissionsIcon className="w-[24px] h-[24px]" viewBox="0 0 24 24" />,
        },
        {
            name: 'UI',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <UIContainer />
                </Suspense>
            ),
            path: 'ui',
            icon: <UIIcon className="w-[24px] h-[24px]" viewBox="0 0 30 30" />,
        },
    ];
    return <TabsNavigator title={'User'} tabs={tabs} path={'settings'} routing />;
}
