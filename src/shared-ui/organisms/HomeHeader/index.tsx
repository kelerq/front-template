import { Logo } from 'assets/icons/logo';
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'shared-ui/atoms/Container';
import { NavigationMenuAdmin } from '../AdminNavigationMenu';
import { NavigationMenuMain } from '../MainNavigationMenu';
import { NavigationMenuUser } from '../UserNavigationMenu';

export const HomeHeader = () => {
    return (
        <header className="fixed top-0 left-0 z-10 w-full px-8 bg-white border-b border-base-border">
            <Container className="flex h-[var(--navigation-height)]">
                <Link to="/im/home" className="flex items-center ">
                    <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
                </Link>
                <nav className="flex flex-row justify-end w-full lg:justify-between">
                    <NavigationMenuMain className="hidden ml-6 lg:flex" />
                    <div className="flex">
                        <NavigationMenuAdmin />
                        <NavigationMenuUser />
                    </div>
                </nav>
            </Container>
        </header>
    );
};
