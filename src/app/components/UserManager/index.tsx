import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'state/global/authorization/reducer';
import { Menu, MenuButton, Button, Avatar, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { ApplicationState } from 'state/applicationState';
import { DispatchType } from 'state/configureStore';
import { Link } from 'react-router-dom';

export function UserManager() {
    const dispatch = useDispatch<DispatchType>();
    const loggedUser = useSelector((state: ApplicationState) => state.authorization.authenticated);

    const logout = () => dispatch(logoutThunk());

    if (!loggedUser) {
        return <></>;
    }
    return (
        <>
            <Menu>
                <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                    <Avatar
                        size={'sm'}
                        src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    />
                    <Button variant={'gray'} size={'sm'} ml={4}>
                        Spreest
                    </Button>
                </MenuButton>
                <MenuList>
                    <Link to="/im/user">
                        <MenuItem>Moje konto</MenuItem>
                    </Link>
                    <MenuDivider />
                    <MenuItem onClick={logout}>Wyloguj</MenuItem>
                </MenuList>
            </Menu>
        </>
    );
}
