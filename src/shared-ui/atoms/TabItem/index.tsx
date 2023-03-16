import classNames from 'classnames';
import React from 'react';
import { useLocation } from 'react-router';

interface TabItemProps {
    name: string;
    index: number;
    path: string;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

export const TabItem = (props: TabItemProps) => {
    const location = useLocation();
    const isActive =
        location.pathname.search(props.path) !== -1 ||
        props.activeTab === props.index ||
        (props.activeTab === undefined && props.index === 0);

    return (
        <li
            onClick={() => {
                props.setActiveTab(props.index);
                console.log('Tab clicked: ', props.index, props.name, props.activeTab);
            }}
            key={props.index}
            className={classNames(
                'mr-2 text-sm',
                isActive
                    ? 'inline-block p-4 text-purple-light border-b-2 border-purple-light rounded-t-lg active'
                    : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
            )}
        >
            {props.name}
        </li>
    );
};
