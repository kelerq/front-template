import classNames from 'classnames';
import React from 'react';
import Row from 'shared-ui/atoms/Row';
import { EditPasswordModal } from './EditPasswordModal';

import { User } from 'core/domainModels/users/user';

interface PasswordSectionProps {
    isLoading: boolean;
    user: User | undefined;
}

const PasswordSection: React.FC<PasswordSectionProps> = ({ isLoading, user }) => {
    return (
        <>
            <h2 className={classNames('text-xl sm:text-2xl font-bold', isLoading && 'skeleton')}>Hasło</h2>
            <Row className="items-center justify-between w-full ">
                <p className={classNames('text-lg sm:text-xl', isLoading && 'skeleton')}>***********</p>
                <EditPasswordModal user={user} />
            </Row>
        </>
    );
};

export default PasswordSection;
