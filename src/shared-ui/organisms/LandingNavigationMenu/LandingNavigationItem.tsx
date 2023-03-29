import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import Button from 'shared-ui/atoms/Button';
import { HambuergerIcon } from 'assets/icons/icons';
import { Link } from 'react-router-dom';

interface NavigationMenuProps {
    className?: string;
}

export const LandingNavigationItem = ({ className }: NavigationMenuProps) => {
    return (
        <NavigationMenu.Item className={classNames('flex flex-row justify-center', className)}>
            <NavigationMenu.Trigger className={classNames('text-2xl flex select-none items-center justify-between gap-[0.2rem]')}>
                <HambuergerIcon className="w-[3.5rem] h-[3.5rem fill-base-400" />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
                className={classNames(
                    'data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight',
                )}
            >
                <ul className="flex flex-col h-full w-full sm:w-[var(--radix-navigation-menu-viewport-width)]">
                    <li className="flex flex-col p-4">
                        <NavigationMenu.Link asChild>
                            <Link to="/im/auth/login">
                                <Button variant="ghost" fullWidth size="large">
                                    Logowanie
                                </Button>
                            </Link>
                        </NavigationMenu.Link>
                        <NavigationMenu.Link asChild>
                            <Link to="/im/auth/signup">
                                <Button variant="primary" fullWidth size="large">
                                    Rejestracja
                                </Button>
                            </Link>
                        </NavigationMenu.Link>
                    </li>
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    );
};
