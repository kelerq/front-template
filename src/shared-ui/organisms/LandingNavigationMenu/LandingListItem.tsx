import React, { ComponentType } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { IconProps } from 'assets/icons/icons';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useHover } from 'shared-hooks/useHover';

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
    to: string;
    Icon: ComponentType<IconProps>;
    className?: string;
}

export const UserListItem = React.forwardRef(
    ({ className, children, title, to, onClick, Icon, ...props }: ListItemProps, forwardedRef: any) => {
        const [hoverRef, isHovered] = useHover<HTMLLIElement>();

        const linkClassNames = classNames(
            'select-none text-2xl leading-none no-underline outline-none transition-colors hover:bg-accent-focus',
            className,
        );

        return (
            <li ref={hoverRef}>
                <NavigationMenu.Link asChild>
                    <Link className={linkClassNames} to={to} {...props} onClick={onClick}>
                        <div
                            className={classNames(
                                'flex flex-row items-center p-4 h-full w-full',
                                isHovered && 'bg-accent-focus',
                                className,
                            )}
                        >
                            <Icon
                                className={classNames('w-[2.5rem] h-[2.5rem] fill-base-400', isHovered && 'fill-primary-focus')}
                                viewBox="0 0 35 35"
                            />
                            <p className="mx-4 text-2xl font-bold text-base-400 whitespace-nowrap sm:font-normal sm:text-xl">
                                {children}
                            </p>
                        </div>
                    </Link>
                </NavigationMenu.Link>
            </li>
        );
    },
);
