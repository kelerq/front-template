import { Link } from 'react-router-dom';
import React from 'react';
import { TabView } from '../../models/tabView';
import { TabItem } from '../tabItem';
import { Row } from 'app/components/Row';

interface NavigationPanelProps {
    tabs: Array<TabView>;
    path: string;
    disabled?: boolean;
    routing?: boolean;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

export const NavigationPanel = (props: NavigationPanelProps) => {
    return (
        <Row className="text-sm text-center text-white border-b border-white">
            <nav className="">
                <ul className="flex flex-wrap -mb-px">
                    {props.tabs.map((tab, index) => (
                        <>
                            {props.routing ? (
                                <Link to={`${tab.path}`}>
                                    <TabItem
                                        name={tab.name}
                                        index={index}
                                        path={tab.path}
                                        activeTab={props.activeTab}
                                        setActiveTab={props.setActiveTab}
                                    />
                                </Link>
                            ) : (
                                <TabItem
                                    name={tab.name}
                                    index={index}
                                    path={tab.path}
                                    activeTab={props.activeTab}
                                    setActiveTab={props.setActiveTab}
                                />
                            )}
                        </>
                    ))}
                </ul>
            </nav>
        </Row>
    );
};
