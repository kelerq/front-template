import React from 'react';
import { Link } from 'react-router-dom';
import SubTabItem from 'shared-ui/atoms/SubTabItem';
import { TabView } from '../../organisms/TabsNavigator/models/tabView';

interface SubNavPanelProps {
    subTabs: Array<TabView>;
    path: string;
    disabled?: boolean;
    routing?: boolean;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

export const SubNavPanel = ({ subTabs, path, disabled, routing = true, activeTab, setActiveTab }: SubNavPanelProps) => (
    <div className="flex flex-row w-screen border-b border-base-border ">
        <nav>
            <ul className="flex flex-row ">
                {subTabs.map((subTab, index) => (
                    <React.Fragment key={index}>
                        {routing ? (
                            <Link to={`${subTab.path}`}>
                                <SubTabItem
                                    // icon={subTab.icon}
                                    name={subTab.name}
                                    index={index}
                                    path={path}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            </Link>
                        ) : (
                            <SubTabItem
                                // icon={subTab.icon}
                                name={subTab.name}
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
    </div>
);
