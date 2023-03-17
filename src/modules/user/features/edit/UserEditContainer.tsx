import { useParams } from 'react-router-dom';
import { LoadingOverlay } from 'shared-ui/molecules/LoadingOverlay';
import { useUser } from 'shared-hooks/useUser';
import React from 'react';
import { TabsNavigator } from 'shared-ui/organisms/TabsNavigator';
import { AccountComponent } from './AccountComponent';
import { PermissionsComponent } from './PermissionsComponent';
import Container from 'shared-ui/atoms/Container';
import Row from 'shared-ui/atoms/Row';
import OtherComponent from './OtherComponent';

export const UserEditContainer = () => {
    const { id } = useParams();
    const { user, userPermissions, isLoading, error, permissions } = useUser(id ? id : '');

    const tabs = [
        {
            name: 'Konto',
            container: <AccountComponent user={user!!} />,
            path: 'account',
        },
        {
            name: 'Zezwolenia',
            container: <PermissionsComponent user={user!!} userPermissions={userPermissions!!} permissions={permissions!!} />,
            path: 'permissions',
        },
        {
            name: 'Inne',
            container: <OtherComponent />,
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
                                {user && permissions && userPermissions && <TabsNavigator tabs={tabs} path={'edit'} />}
                            </div>
                        </Row>
                    </Container>
                </section>
            )}
        </>
    );
};
