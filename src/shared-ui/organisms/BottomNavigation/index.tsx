import React from 'react';
import { NavigationMenuMain } from '../MainNavigationMenu';

export const BottomNavigation = () => {
    return (
        <nav className="fixed bottom-0 left-0 z-20 w-full bg-white border-t border-base-border lg:hidden ">
            <NavigationMenuMain className="" />
        </nav>
    );
};
