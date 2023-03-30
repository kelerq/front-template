import React from 'react';
import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { InputSearch } from 'shared-ui/atoms/InputSearch';
import { AdminNavigationItem } from './AdminNavigationMenuItem';

interface NavigationMenuProps {
    className?: string;
}

export const NavigationMenuAdmin = ({ className }: NavigationMenuProps) => {
    return (
        <NavigationMenu.Root className={(classNames('relative z-[1] sm:w-screen'), className)}>
            <NavigationMenu.List className="h-[var(--navigation-height)] w-full flex items-center">
                <AdminNavigationItem className="mr-2" />
                <InputSearch className="hidden sm:flex" size="large" placeholder="Szukaj użytkownika" />
            </NavigationMenu.List>

            <div className="perspective-[200rem] absolute top-[calc(var(--navigation-height)_+_0.1rem)] left-0 sm:left-auto">
                <NavigationMenu.Viewport
                    className={classNames(
                        'relative  h-screen w-screen sm:h-[var(--radix-navigation-menu-viewport-height)] bg-base-200 sm:bg-base-100 shadow-md sm:w-[var(--radix-navigation-menu-viewport-width)]',
                        'overflow-hidden rounded-b-lg',
                        'data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut transition-[width,_height] duration-300',
                    )}
                />
            </div>
        </NavigationMenu.Root>
    );
};
