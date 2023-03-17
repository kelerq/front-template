import classNames from 'classnames';
import React, { FC } from 'react';

interface TabItemProps {
    name: string;
    index: number;
    path: string;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

const TabItem: FC<TabItemProps> = ({ name, index, path, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(index);
        console.log('Tab clicked:', index, name, activeTab);
    };

    const isActive = activeTab === index || (activeTab === undefined && index === 0);

    const itemClasses = classNames(
        'mr-2 text-sm',
        isActive
            ? 'inline-block p-4 text-purple-light border-b-2 border-purple-light rounded-t-lg active'
            : 'inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
    );

    return (
        <li key={index} className={itemClasses} onClick={handleClick}>
            {name}
        </li>
    );
};

export default TabItem;
