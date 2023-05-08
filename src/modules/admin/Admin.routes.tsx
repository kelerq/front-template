import { TabsNavigator } from 'shared-ui/organisms/TabsNavigator';
import React, { Suspense } from 'react';
import { UsersContainer } from 'modules/admin/features/users/UsersContainer';
import PermissionsContainer from 'modules/admin/features/permissions/PermissionsContainer';
import { UsersIcon, BrushIcon, PieChartIcon, KeyIcon } from 'assets/icons/icons';
import { UIRoutes } from './features/ui/UI.routes';
import { StatisticsContainer } from './features/statistics/StatisticsContainer';

export function AdminRoutes(): JSX.Element {
    const tabs = [
        {
            name: 'Uprawnienia',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <PermissionsContainer />
                </Suspense>
            ),
            path: 'permissions',
            icon: <KeyIcon className="w-7 h-7 stroke-base-400" />,
        },
        {
            name: 'Użytkownicy',
            container: <UsersContainer />,
            path: 'users',
            icon: <UsersIcon className="w-7 h-7 stroke-base-400" />,
        },
        {
            name: 'Statystyki',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <StatisticsContainer />
                </Suspense>
            ),
            path: 'statistics',
            icon: <PieChartIcon className="w-7 h-7 stroke-base-400" />,
        },
        {
            name: 'UI',
            container: (
                <Suspense fallback={<div>Loading...</div>}>
                    <UIRoutes />
                </Suspense>
            ),
            path: 'ui',
            icon: <BrushIcon className="w-7 h-7 stroke-base-400" />,
        },
    ];
    return <TabsNavigator title={'Admin'} tabs={tabs} path={'admin'} routing />;
}
