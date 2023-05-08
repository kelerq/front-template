import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import React from 'react';
import { CalculatorNavigationItem, StatisticNavigationItem, InventoryNavigationItem } from './MainNavigationMenuItems';

interface NavigationMenuProps {
    className?: string;
}

export const NavigationMenuMain = ({ className }: NavigationMenuProps) => {
    return (
        <NavigationMenu.Root className={(classNames('relative z-[1] lg:w-screen'), className)}>
            <NavigationMenu.List className="h-[var(--navigation-height)] w-full flex lg:ml-6 justify-around">
                <CalculatorNavigationItem />
                <StatisticNavigationItem />
                <InventoryNavigationItem />
            </NavigationMenu.List>
            <div className="perspective-[200rem] absolute bottom-[calc(var(--navigation-height)_+_0.1rem)] lg:top-[calc(var(--navigation-height)_+_0.1rem)] lg:ml-6 left-0 lg:left-auto">
                <NavigationMenu.Viewport
                    className={classNames(
                        'relative    h-[calc(100vh_-_0.2rem_-_2_*_var(--navigation-height))] w-screen lg:h-[var(--radix-navigation-menu-viewport-height)] bg-base-200 lg:bg-base-100 lg:shadow-md lg:w-[var(--radix-navigation-menu-viewport-width)]',
                        'overflow-hidden rounded-b-lg',
                        'data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut transition-[width,_height] duration-300',
                    )}
                />
            </div>
        </NavigationMenu.Root>
    );
};
