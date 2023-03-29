import React from 'react';
import classNames from 'classnames';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { QuestionMarkCircledIcon } from 'assets/icons/icons';
import { LandingNavigationItem } from './LandingNavigationItem';
import Button from 'shared-ui/atoms/Button';

interface NavigationMenuProps {
    className?: string;
}

export const LandingNavigationMenu = ({ className }: NavigationMenuProps) => {
    return (
        <NavigationMenu.Root className={(classNames('relative z-[1] sm:w-screen'), className)}>
            <NavigationMenu.List className="h-[var(--navigation-height)] w-full flex items-center">
                <div className="hidden sm:flex">
                    <Button href="/im/auth/login" variant="ghost" size="large" className="">
                        Logowanie
                    </Button>
                    <Button href="/im/auth/signup" variant="primary" size="large" className="ml-2">
                        Rejestracja
                    </Button>
                    <QuestionMarkCircledIcon className="mr-2 w-[3.5rem] h-[3.5rem] ml-4" viewBox="0 0 15 15" fill="#181A2A" />
                </div>
                <LandingNavigationItem className="sm:hidden" />
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
