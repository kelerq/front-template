import React from 'react';
import { FC } from 'react';

interface NavHeaderProps {
    children: React.ReactNode;
}

export const NavHeader: FC<NavHeaderProps> = ({ children }) => (
    <div className="hidden p-3 text-2xl border-b-2 sm:flex pl-7">{children}</div>
);
