import classNames from 'classnames';
import React, { FC } from 'react';

interface TabItemProps {
    icon;
    name: string;
    index: number;
    path: string;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

const TabItem: FC<TabItemProps> = ({ icon, name, index, path, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(index);
        console.log('Tab clicked:', index, name, activeTab);
    };

    const isActive = activeTab === index || (activeTab === undefined && index === 0);

    const itemClasses = classNames(
        'mr-2 text-lg sm:text-l lg:text-xl flex h-[67px] whitespace-nowrap',
        isActive
            ? 'inline-block p-4 text-primary-focus sm:text-base-400 bg-accent-focus font-bold  min-w-full m-0 sm:border-l-4 border-primary-focus border-b-4 sm:border-b-0 border-l-0 font-medium sm:font-semibold'
            : 'inline-block p-4 min-w-full border-b-4 border-transparent  border-l-0 sm:border-l-4 hover:text-base-400 hover:bg-accent-focus bg-accent-focus sm:bg-white sm:border-b-0',
    );

    return (
        <li key={index} className={itemClasses} onClick={handleClick}>
            <p className="justify-center sm:ml-5">{icon}</p>
            <p className="ml-2 sm:ml-3 ">{name}</p>
        </li>
    );
};

export default TabItem;
