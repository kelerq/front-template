import { TabsNavigator } from 'shared-ui/organisms/TabsNavigator';
import React from 'react';
import { AccountContainer } from './features/account/AccountContainer';

export function SettingsRoutes(): JSX.Element {
    const tabs = [
        {
            name: 'Moje konto',
            container: <AccountContainer />,
            path: 'account',
        },
    ];
    return <TabsNavigator title={'User'} tabs={tabs} path={'settings'} routing />;
}
