import { TabList } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { TabView } from '../../models/tabView';
import { TabItem } from '../tabItem';

interface NavigationPanelProps {
    tabs: Array<TabView>;
    path: string;
    disabled?: boolean;
}

export const NavigationPanel = (props: NavigationPanelProps) => {
    return (
        <TabList>
            {props.tabs.map((tab, index) => (
                <Link to={`${props.path}/${tab.path}`}>
                    <TabItem name={tab.name} index={index} />
                </Link>
            ))}
        </TabList>
    );
};
