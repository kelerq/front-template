import { Container } from 'app/components/Container';
import { useParams } from 'react-router-dom';
import { LoadingOverlay } from 'app/components/LoadingOverlay';
import { useUser } from 'app/hooks/useUser';
import React from 'react';
import { TabsNavigator } from 'app/components/TabsNavigator';
import { AccountComponent } from './components/account';
import { PermissionsComponent } from './components/permissions';
import { OtherComponent } from './components/other';
import { Row } from 'app/components/Row';
import { UserIcon } from 'assets/icons/icons';

export const UserEditContainer = () => {
    const { id } = useParams();
    const { user, permissions, isLoading, error } = useUser(id ? id : '');

    const tabs = [
        {
            name: 'Konto',
            component: <AccountComponent user={user!!} />,
            path: 'account',
        },
        {
            name: 'Zezwolenia',
            component: <PermissionsComponent user={user!!} permissions={permissions!!} />,
            path: 'permissions',
        },
        {
            name: 'Inne',
            component: <OtherComponent />,
            path: 'Other',
        },
    ];

    return (
        <>
            {error && <div>{error.toString()}</div>}
            {isLoading && <LoadingOverlay pending />}
            {user && (
                <section className="overflow-hidden text-gray-600 font-lg">
                    <Container className="container px-5 py-24">
                        <Row className="flex flex-wrap ">
                            <div className="w-full mb-6 lg:pr-10 lg:py-6 lg:mb-0">
                                <h2 className="text-sm tracking-widest text-gray-500 title-font">User</h2>
                                <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font">
                                    {user.firstName} {user.lastName}
                                </h1>
                                <TabsNavigator tabs={tabs} path={'edit'} />
                            </div>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};
