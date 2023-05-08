import React from 'react';
import { Link } from 'react-router-dom';
import TabItem from 'shared-ui/atoms/TabItem';
import { TabView } from '../../organisms/TabsNavigator/models/tabView';
import { NavHeader } from 'shared-ui/atoms/NavHeader';
interface NavigationPanelProps {
    title: string;
    tabs: Array<TabView>;
    path: string;
    disabled?: boolean;
    routing?: boolean;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

export const NavigationPanel = ({
    title,
    tabs,
    path,
    disabled,
    routing = true,
    activeTab,
    setActiveTab,
}: NavigationPanelProps) => (
    <div className="flex flex-row w-screen p-0 overflow-x-auto text-sm lg:border-r lg:min-h-screen lg:w-1/4 xl:w-1/6 lg:flex-col border-base-border text-base-400 lg:bg-white bg-accent-focus">
        <NavHeader>{title}</NavHeader>
        <nav>
            <ul className="flex flex-row -mb-px lg:flex-col">
                {tabs.map((tab, index) => (
                    <React.Fragment key={index}>
                        {routing ? (
                            <Link to={`${tab.path}`}>
                                <TabItem
                                    icon={tab.icon}
                                    name={tab.name}
                                    index={index}
                                    path={path}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                />
                            </Link>
                        ) : (
                            <TabItem
                                icon={tab.icon}
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
    </div>
);
