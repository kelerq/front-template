import { useParams } from 'react-router-dom';
import { UserIcon } from 'assets/icons/icons';
import { LoadingOverlay } from 'shared-ui/molecules/LoadingOverlay';
import { useUser } from 'shared-hooks/useUser';
import React from 'react';
import Container from 'shared-ui/atoms/Container';

const UserInfoContainer = () => {
    const { id } = useParams();
    const { user, isLoading, error } = useUser(id ? id : '');

    return (
        <>
            {error && <div>{error.toString()}</div>}
            {isLoading && <LoadingOverlay pending />}
            {user && (
                <Container>
                    <div className="container flex flex-col px-5 py-24 mx-auto">
                        <div className="mx-auto lg:w-4/6">
                            <div className="flex flex-col mt-10 sm:flex-row">
                                <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
                                    <div className="inline-flex items-center justify-center w-20 h-20 text-gray-400 bg-gray-200 rounded-full">
                                        <UserIcon />
                                    </div>
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                                            {user.firstName} {user.lastName}
                                        </h2>
                                        <div className="w-12 h-1 mt-2 mb-4 bg-green-500 rounded"></div>
                                        <p className="mb-2 text-sm">{user.email}</p>
                                        {user.isActive ? (
                                            <p className="text-sm text-green-500">Active</p>
                                        ) : (
                                            <p className="text-sm text-red-500">Non active</p>
                                        )}
                                    </div>
                                </div>
                                <div className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left">
                                    <p className="mb-4 text-lg leading-relaxed">
                                        Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday
                                        carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub
                                        farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer
                                        drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's
                                        scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo
                                        intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </>
    );
};

export default UserInfoContainer;
