import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'shared-ui/atoms/Container';
import { SubNavPanel } from 'shared-ui/molecules/SubNavPanel';
import { TabView } from '../TabsNavigator/models/tabView';

interface SubTabNavigatorProps {
    subTabs: Array<TabView>;
    activeTab?: number;
    path: string;
    routing?: boolean;
    initialTab?: number;
    subTabChanged?: (newTabIndex: number) => void;
    subTabClicked?: (tabIndex: number | undefined) => void;
}

export const SubTabsNavigator: React.FC<SubTabNavigatorProps> = ({
    subTabs,
    path,
    routing = false,
    initialTab = 0,
    subTabChanged,
    subTabClicked,
}) => {
    const [activeTab, setActiveTab] = useState(initialTab);

    const renderContent = () => {
        if (routing) {
            return (
                <Routes>
                    {subTabs.map(subTab => (
                        <Route path={subTab.path} element={subTab.container} />
                    ))}
                </Routes>
            );
        }

        return subTabs[activeTab].container;
    };
    return (
        <Container className="flex flex-col ">
            <SubNavPanel subTabs={subTabs} path={path} routing={routing} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="w-screen">{renderContent()}</div>
        </Container>
    );
};
