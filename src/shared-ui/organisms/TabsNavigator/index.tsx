import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'shared-ui/atoms/Container';
import { NavigationPanel } from '../../molecules/NavigationPanel';
import { TabView } from './models/tabView';
import { NavHeader } from 'shared-ui/atoms/NavHeader';

interface TabNavigatorProps {
    title: string;
    tabs: Array<TabView>;
    activeTab?: number;
    path: string;
    routing?: boolean;
    initialTab?: number;
    tabChanged?: (newTabIndex: number) => void;
    tabClicked?: (tabIndex: number | undefined) => void;
}

export const TabsNavigator: React.FC<TabNavigatorProps> = ({
    title,
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
        <Container className="flex flex-col bg-white sm:flex-row">
            <NavigationPanel
                title={title}
                tabs={tabs}
                path={path}
                routing={routing}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <div className="w-screen">{renderContent()}</div>
        </Container>
    );
};
