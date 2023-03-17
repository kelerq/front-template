import React from 'react';
import { Link } from 'react-router-dom';
import Row from 'shared-ui/atoms/Row';
import TabItem from 'shared-ui/atoms/TabItem';
import { TabView } from '../../organisms/TabsNavigator/models/tabView';

interface NavigationPanelProps {
    tabs: Array<TabView>;
    path: string;
    disabled?: boolean;
    routing?: boolean;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

export const NavigationPanel = ({ tabs, path, disabled, routing = true, activeTab, setActiveTab }: NavigationPanelProps) => (
    <Row className="text-sm text-center text-white border-b border-white">
        <nav>
            <ul className="flex flex-wrap -mb-px">
                {tabs.map((tab, index) => (
                    <React.Fragment key={index}>
                        {routing ? (
                            <Link to={`${tab.path}`}>
                                <TabItem
                                    name={tab.name}
                                    index={index}
                                    path={path}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            </Link>
                        ) : (
                            <TabItem
                                name={tab.name}
                                index={index}
                                path={path}
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                            />
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </nav>
    </Row>
);
