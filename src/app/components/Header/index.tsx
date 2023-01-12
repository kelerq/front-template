'use-client';

import React from 'react';
import { LandingHeader } from './landing';
import { HomeHeader } from './home';

interface HeaderProps {
    isLanding?: boolean;
}

export const Header = ({ isLanding }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 z-10 w-full border-b border-white-a08 backdrop-blur-[12px]">
            {isLanding ? <LandingHeader /> : <HomeHeader />}
        </header>
    );
};
