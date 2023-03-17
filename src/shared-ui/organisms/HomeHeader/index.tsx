'use-client';

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from 'assets/icons/logo';
import { RxHamburgerMenu } from 'react-icons/rx';
import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from 'shared-state/applicationState';
import { DispatchType } from 'shared-state/configureStore';
import { logoutThunk } from 'shared-state/global/authorization/reducer';
import Button from 'shared-ui/atoms/Button';
import Container from 'shared-ui/atoms/Container';

export const HomeHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const user = useSelector((state: ApplicationState) => state.users.authenticatedUser);
    const dispatch = useDispatch<DispatchType>();
    const navigate = useNavigate();

    const logout = () => dispatch(logoutThunk()).then(() => navigate('/im/auth/login'));

    return (
        <header className="fixed top-0 left-0 z-10 w-full border-b border-base-border">
            <Container className="flex h-navigation-height">
                <Link to="/im/home" className="flex items-center">
                    <Logo className="w-[1.8rem] h-[1.8rem] mr-4" />
                </Link>
                <nav
                    className={classNames(
                        'fixed top-navigation-height left-0 h-[calc(100vh_-_var(--navigation-height))] w-full overflow-auto bg-background transition-opacity duration-500',
                        'md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-white md:opacity-100 md:transition-none',
                        isMenuOpen ? '' : 'hidden',
                    )}
                >
                    <ul
                        className={classNames(
                            'flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-gray-dark md:[&_li]:border-none',
                            'ease-in [&_a]:flex [&_a]:h-navigation-height [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-xl [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-sm [&_a]:md:transition-colors [&_a:hover]:text-primary-focus',
                            isMenuOpen && '[&_a]:translate-y-0',
                        )}
                    >
                        <li>
                            <Link to="/im/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/im/ui">Ui</Link>
                        </li>
                        <li className="md:hidden lg:block">
                            <Link to="/im/settings/account">User</Link>
                        </li>
                        {/* <li className="md:hidden lg:block">
                            <Link to="/im/settings">Settings</Link>
                        </li> */}
                    </ul>
                </nav>

                <div className="flex items-center h-full ml-auto">
                    <p className="mr-6 text-lg">Witaj {user?.firstName}</p>
                    <Button variant="primary" modifier="outline" onClick={logout}>
                        Log out
                    </Button>
                </div>
                <button className="ml-6 md:hidden" onClick={() => setIsMenuOpen(open => !open)}>
                    <span className="sr-only"> Toggle menu</span>
                    <RxHamburgerMenu />
                </button>
            </Container>
        </header>
    );
};
