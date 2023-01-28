import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from '../Container';
import { NavigationPanel } from './components/navigationPanel';
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

export const TabsNavigator = (props: TabNavigatorProps) => {
    const [activeTab, setActiveTab] = useState(props.initialTab);

    return (
        <Container>
            <NavigationPanel
                tabs={props.tabs}
                path={props.path}
                routing={props.routing}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            {props.routing ? (
                <Routes>
                    {props.tabs.map((tab, index) => (
                        <Route path={`${tab.path}`} element={tab.component} />
                    ))}
                </Routes>
            ) : (
                props.tabs[activeTab || props.initialTab || 0].component
            )}
        </Container>
    );
};
