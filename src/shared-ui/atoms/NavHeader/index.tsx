import React from 'react';
import { FC } from 'react';

interface NavHeaderProps {
    children: React.ReactNode;
}

export const NavHeader: FC<NavHeaderProps> = ({ children }) => (
    <div className="hidden py-2 text-2xl text-base-content border-b pl-11 h-[var(--subnav-height)] border-base-border lg:flex items-center">
        {children}
    </div>
);
