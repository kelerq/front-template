import React, { ComponentType } from 'react';
import MainListItemContent from './AdminListItemContent';
import { Link } from 'react-router-dom';
import { IconProps } from '@radix-ui/react-icons/dist/types';
import classNames from 'classnames';
import { useHover } from 'shared-hooks/useHover';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    title: string;
    to: string;
    Icon: ComponentType<IconProps>;
    className?: string;
}

const AdminListItem = React.forwardRef(({ className, children, title, to, Icon, ...props }: ListItemProps, forwardedRef: any) => {
    const [hoverRef, isHovered] = useHover<HTMLLIElement>();
    const linkClassNames = classNames('select-none text-xl leading-none no-underline outline-none transition-colors', className);

    return (
        <li ref={hoverRef}>
            <NavigationMenu.Link asChild>
                <Link className={linkClassNames} to={to} {...props}>
                    <MainListItemContent isHovered={isHovered} Icon={Icon} title={title}>
                        {children}
                    </MainListItemContent>
                </Link>
            </NavigationMenu.Link>
        </li>
    );
});

export default AdminListItem;
