import { TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { NavigationPanel } from './components/navigationPanel';
import { TabView } from './models/tabView';

interface TabNavigatorProps {
    tabs: Array<TabView>;
    path: string;
    initialTab?: number;
    tabChanged?: (newTabIndex: number) => void;
    tabClicked?: (tabIndex: number | undefined) => void;
}

export const TabsNavigator = (props: TabNavigatorProps) => {
    return (
        <Tabs isFitted variant="enclosed" className="pt-2">
            <NavigationPanel tabs={props.tabs} path={props.path} />
            <TabPanels>
                {props.tabs.map((tab, index) => (
                    <TabPanel p={4} key={index}>
                        {tab.component}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};
