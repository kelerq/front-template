import React, { ComponentType } from 'react';
import { IconProps } from 'assets/icons/icons';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';

interface ListItemContentProps {
    isHovered: boolean;
    Icon: ComponentType<IconProps>;
    title: string;
    children: React.ReactNode;
}

const AdminListItemContent: React.FC<ListItemContentProps> = ({ isHovered, Icon, title, children }) => {
    const arrowIconClassNames = classNames('transition-transform duration-[250] ease-in text-primary-focus w-6 h-6');
    return (
        <div className={classNames('grid grid-cols-12 grid-rows-1 rounded-lg p-2 sm:p-0', isHovered && 'bg-accent-focus')}>
            <div className={classNames('col-start-1 col-end-3 row-start-1 row-end-2 p-2 justify-self-start place-self-center')}>
                <Icon className={classNames('w-[4rem] h-[4rem] stroke-base-400', isHovered && 'stroke-primary-focus')} />
            </div>
            <div className="col-start-3 col-end-12 row-start-1 row-end-2 place-self-center justify-self-stretch">
                <p className="text-2xl font-bold sm:text-xl text-base-400">{title}</p>
                <p className="hidden text-base-300 sm:flex">{children}</p>
            </div>
            <div className="hidden col-start-12 col-end-13 row-start-1 row-end-2 justify-self-center place-self-center sm:flex">
                {isHovered && <ArrowRightIcon className={arrowIconClassNames} aria-hidden />}
            </div>
        </div>
    );
};

export default AdminListItemContent;
