import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import MainListItem from './MainListItem';
import classNames from 'classnames';
import {
    ArchiveIcon,
    CalculatorIcon,
    CalculatorWithPencilIcon,
    CubeIcon,
    InventoryIcon,
    OrderIcon,
    PieChartIcon,
    StatisticIcon,
} from 'assets/icons/icons';

const NavigationItem = ({ children, className, Icon, title }) => {
    return (
        <NavigationMenu.Item className={`flex flex-row justify-center ${className}`}>
            <NavigationMenu.Trigger
                className={classNames(
                    'data-state-open:text-primary-focus text-2xl  group flex select-none items-center justify-between gap-[0.2rem]',
                )}
            >
                <div className={classNames('hidden sm:flex lg:hidden')}>
                    <Icon className="w-[3rem] h-[3rem] sm:flex sm:mr-1 group-data-[state=open]:fill-primary-focus group-data-[state=closed]:fill-base-400 " />
                </div>
                <p className={classNames('hidden sm:flex ')}>{title} </p>
                <CaretDownIcon
                    className="text-black relative top-[0.1rem] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180 hidden sm:flex"
                    aria-hidden
                />
                <div className={classNames('flex flex-col items-center mt-2 sm:hidden')}>
                    <Icon className="w-[3rem] h-[3rem] sm:flex sm:mr-1 group-data-[state=open]:fill-primary-focus group-data-[state=closed]:fill-base-400 " />
                    <p className="text-lg">{title}</p>
                </div>
            </NavigationMenu.Trigger>
            <NavigationMenu.Content
                className={classNames(
                    'data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight',
                )}
            >
                <ul className="flex flex-col h-full w-[var(--radix-navigation-menu-viewport-width)] lg:justify-evenly lg:p-2 mr-1">
                    {children}
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    );
};

const CalculatorNavigationItem = () => (
    <NavigationItem className="ml-4" Icon={CalculatorIcon} title="Kalkulator">
        <MainListItem to="/" title="Faktyczny" Icon={CalculatorIcon}>
            Oblicz koszt towaru na podstawie
        </MainListItem>
        <MainListItem to="/" title="Predykcyjny" Icon={CalculatorWithPencilIcon}>
            Oszacuj swoje zyski przed zamówieniem towaru
        </MainListItem>
    </NavigationItem>
);

const StatisticNavigationItem = () => (
    <NavigationItem className="ml-4" Icon={PieChartIcon} title="Statystyki">
        <MainListItem to="/" title="Główne" Icon={StatisticIcon}>
            Statystyki ogólne
        </MainListItem>
        <MainListItem to="/" title="Zamówienia" Icon={OrderIcon}>
            Statystyki dotyczące zamówień
        </MainListItem>
        <MainListItem to="/" title="Magazyn" Icon={InventoryIcon}>
            Statystyki dotyczące magazynu
        </MainListItem>
    </NavigationItem>
);
const InventoryNavigationItem = () => (
    <NavigationItem className="ml-4" Icon={InventoryIcon} title="Magazyn">
        <MainListItem to="/" title="Produkty" Icon={CubeIcon}>
            Lista produktów
        </MainListItem>
        <MainListItem to="/" title="Kontrola magazynu" Icon={ArchiveIcon}>
            Kontrola stanu magazynowego
        </MainListItem>
    </NavigationItem>
);

export { CalculatorNavigationItem, StatisticNavigationItem, InventoryNavigationItem };
