import React from 'react';
import { User } from 'core/domainModels/users/user';
import classNames from 'classnames';
import Row from 'shared-ui/atoms/Row';
import { EditNameModal } from './EditNameModal';

interface NameSectionProps {
    isLoading: boolean;
    user: User | undefined;
}

const NameSection: React.FC<NameSectionProps> = ({ isLoading, user }) => {
    return (
        <>
            <h2 className={classNames('text-2xl font-bold', isLoading && 'skeleton')}>Imie i nazwisko</h2>
            <Row className={classNames('justify-between w-full items-center')}>
                <p className={classNames('text-lg sm:text-xl', isLoading && 'skeleton')}>
                    {user?.firstName} {user?.lastName}
                </p>
                <EditNameModal user={user} />
            </Row>
        </>
    );
};

export default NameSection;
