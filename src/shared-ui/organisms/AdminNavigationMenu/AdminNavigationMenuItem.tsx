import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import AdminListItem from './AdminListItem';
import classNames from 'classnames';
import { BrushIcon, KeyIcon, PieChartIcon, UsersIcon } from 'assets/icons/icons';
import { InputSearch } from 'shared-ui/atoms/InputSearch';

interface AdminNavigationItemProps {
    className?: string;
}

const AdminNavigationItem = ({ className }: AdminNavigationItemProps) => {
    return (
        <NavigationMenu.Item className={classNames('flex flex-row justify-center', className)}>
            <NavigationMenu.Trigger
                className={classNames(
                    'text-2xl data-state-open:text-primary-focus group flex select-none items-center justify-between gap-[0.2rem]',
                )}
            >
                Admin{' '}
                <CaretDownIcon
                    className="text-black relative top-[0.1rem] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
                className={classNames(
                    'data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight',
                )}
            >
                <ul className="flex flex-col h-full w-[var(--radix-navigation-menu-viewport-width)] sm:justify-evenly sm:p-2">
                    <div className="flex justify-center w-full p-8 h-28 sm:hidden bg-base-100">
                        <InputSearch size="large" className="w-full" />
                    </div>
                    <AdminListItem to="/im/admin/permissions" title="Uprawnienia" Icon={KeyIcon}>
                        Zarządzanie uprawnieniami użytkowników
                    </AdminListItem>
                    <AdminListItem to="/im/admin/users" title="Użytkownicy" Icon={UsersIcon}>
                        Zarządzanie użytkownikami
                    </AdminListItem>
                    <AdminListItem to="/im/admin/statistics" title="Statystyki" Icon={PieChartIcon}>
                        Statystyki aplikacji
                    </AdminListItem>
                    <AdminListItem to="/im/admin/ui" title="Ui" Icon={BrushIcon}>
                        Prezentacja komponentów UI
                    </AdminListItem>
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    );
};

export { AdminNavigationItem };
