import React from 'react';
import Container from 'shared-ui/atoms/Container';
import {
    DeleteIcon,
    EditIcon,
    LockIcon,
    UserIcon,
    ActiveIcon,
    NonActiveIcon,
    PlusIcon,
    MinusIcon,
    ExclamationIcon,
    CloseIcon,
    UsersIcon,
    // PermissionsIcon,
    // UIIcon,
} from 'assets/icons/icons';

export const IconExamplesConatainer = () => {
    return (
        <Container className="flex flex-row m-4 ">
            <DeleteIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 50 50" />
            <EditIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <LockIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <UserIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <ActiveIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <NonActiveIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <PlusIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <MinusIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" />
            <ExclamationIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 100 100" />
            <CloseIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 14 14" />
            <UsersIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 24 24" />
            {/* <PermissionsIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 24 24" />
            <UIIcon className="w-[50px] h-[50px] m-4" viewBox="0 0 30 30" /> */}
        </Container>
    );
};
