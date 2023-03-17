import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'shared-ui/atoms/Container';
import { NavigationPanel } from '../../molecules/NavigationPanel';
import { TabView } from './models/tabView';

interface TabNavigatorProps {
    tabs: Array<TabView>;
    activeTab?: number;
    path: string;
    routing?: boolean;
    initialTab?: number;
    tabChanged?: (newTabIndex: number) => void;
    tabClicked?: (tabIndex: number | undefined) => void;
}

export const TabsNavigator: React.FC<TabNavigatorProps> = ({
    tabs,
    path,
    routing = false,
    initialTab = 0,
    tabChanged,
    tabClicked,
}) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const renderContent = () => {
        if (routing) {
            return (
                <Routes>
                    {tabs.map(tab => (
                        <Route path={tab.path} element={tab.container} />
                    ))}
                </Routes>
            );
        }

        return tabs[activeTab].container;
    };

    return (
        <Container>
            <NavigationPanel tabs={tabs} path={path} routing={routing} activeTab={activeTab} setActiveTab={setActiveTab} />
            {renderContent()}
        </Container>
    );
};
