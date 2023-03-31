import classNames from 'classnames';
import React, { FC } from 'react';

interface SubTabItemProps {
    icon;
    name: string;
    index: number;
    path: string;
    activeTab?: number;
    setActiveTab: (newTabIndex: number) => void;
}

const SubTabItem: FC<SubTabItemProps> = ({ icon, name, index, path, activeTab, setActiveTab }) => {
    const handleClick = () => {
        setActiveTab(index);
        console.log('Tab clicked:', index, name, activeTab);
    };

    const isActive = activeTab === index || (activeTab === undefined && index === 0);

    const itemClasses = classNames(
        ' text-lg sm:text-l lg:text-xl flex h-28 whitespace-nowrap px-7 cursor-pointer',
        isActive ? ' inline-block p-4 border-b-4 border-primary-focus text-primary-focus' : 'inline-block p-4 ',
    );

    return (
        <li key={index} className={itemClasses} onClick={handleClick}>
            <p className="self-center ">{icon}</p>
            <p>{name}</p>
        </li>
    );
};

export default SubTabItem;
