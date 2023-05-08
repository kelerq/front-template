import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from 'assets/icons/logo';
import Container from 'shared-ui/atoms/Container';
import { LandingNavigationMenu } from '../LandingNavigationMenu';

export const LandingHeader = () => {
    return (
        <header className="fixed top-0 left-0 z-10 w-full bg-white border-b border-base-border">
            <Container className="flex h-[var(--navigation-height)]">
                <Link to="/im/home" className="flex items-center ">
                    <Logo className="w-[2.5rem] h-[2.5rem] mr-4" />
                </Link>
                <nav className="flex items-center justify-end w-full">
                    <LandingNavigationMenu />
                </nav>
            </Container>
        </header>
    );
};

export default LandingHeader;
