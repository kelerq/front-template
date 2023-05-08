import React from 'react';
import classNames from 'classnames';
import { UserNavigationItem } from './UserNavigationItem';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { QuestionMarkCircledIcon, BellIcon } from 'assets/icons/icons';

interface NavigationMenuProps {
    className?: string;
}

export const NavigationMenuUser = ({ className }: NavigationMenuProps) => {
    return (
        <NavigationMenu.Root className={(classNames('relative z-[1] sm:w-screen'), className)}>
            <NavigationMenu.List className="h-[var(--navigation-height)] w-full flex sm:ml-6 items-center">
                <QuestionMarkCircledIcon className="mr-2 w-[3rem] h-[3rem]" fill="#181A2A" />
                <BellIcon className="mr-2 w-[3rem] h-[3rem]" fill="#181A2A" />
                <UserNavigationItem />
            </NavigationMenu.List>

            <div className="perspective-[200rem] absolute top-[calc(var(--navigation-height)_+_0.1rem)] right-0">
                <NavigationMenu.Viewport
                    className={classNames(
                        'relative  h-screen sm:h-[var(--radix-navigation-menu-viewport-height)] bg-base-200 sm:bg-base-100 w-screen shadow-md sm:w-[var(--radix-navigation-menu-viewport-width)]',
                        'overflow-hidden rounded-b-lg',
                        'data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut transition-[width,_height] duration-300',
                    )}
                />
            </div>
        </NavigationMenu.Root>
    );
};
