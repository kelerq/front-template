import React from 'react';
import { useDispatch } from 'react-redux';
import { DispatchType } from 'shared-state/configureStore';
import { logoutThunk } from 'shared-state/global/authorization/reducer';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { UserIcon, ExitIcon } from 'assets/icons/icons';
import { useNavigate } from 'react-router-dom';
import { UserListItem } from './UserListItem';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import Separator from 'shared-ui/atoms/Separator';
import Avatar from 'shared-ui/atoms/Avatar';

interface NavigationMenuProps {
    className?: string;
}

const NavigationItem = ({ children, className, Avatar, label }) => {
    return (
        <NavigationMenu.Item className={classNames('flex flex-row justify-center', className)}>
            <NavigationMenu.Trigger
                className={classNames(
                    'text-2xl data-state-open:text-primary-focus flex select-none items-center justify-between gap-[0.2rem]',
                )}
            >
                <Avatar className="hidden mr-2 text-neutral sm:flex h-[3.5rem] w-[3.5rem]" />
                <p>
                    <span className="hidden sm:inline"> {label} </span>
                </p>
                <CaretDownIcon
                    className="text-black relative top-[0.1rem] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 hidden sm:flex"
                    aria-hidden
                />
                <div className="flex flex-col h-[3.5rem] w-[3.5rem] justify-center items-center sm:hidden group-data-[state=open]:text-primary-focus">
                    <Avatar label={label} />
                </div>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
                className={classNames(
                    'data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight',
                )}
            >
                <ul className="flex flex-col h-full w-full sm:w-[var(--radix-navigation-menu-viewport-width)]">{children}</ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    );
};

export const UserNavigationItem = ({ className }: NavigationMenuProps) => {
    const dispatch = useDispatch<DispatchType>();
    const navigate = useNavigate();

    const logout = () => dispatch(logoutThunk()).then(() => navigate('/im/auth/login'));

    return (
        <NavigationItem className={className} Avatar={Avatar} label="Spreest">
            <UserListItem to="/im/settings/account" Icon={UserIcon}>
                Moje konto
            </UserListItem>
            <Separator className="hidden sm:flex" />
            <UserListItem to="/" Icon={ExitIcon} onClick={logout}>
                Wyloguj
            </UserListItem>
        </NavigationItem>
    );
};
