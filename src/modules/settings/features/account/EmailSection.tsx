import React from 'react';
import { User } from 'core/domainModels/users/user';
import classNames from 'classnames';
import Row from 'shared-ui/atoms/Row';
import { EditEmailModal } from './EditEmailModal';

interface EmailSectionProps {
    isLoading: boolean;
    user: User | undefined;
}

const EmailSection: React.FC<EmailSectionProps> = ({ isLoading, user }) => {
    return (
        <>
            <h2 className={classNames('text-2xl font-bold', isLoading && 'skeleton')}>Email</h2>
            <Row className="items-center justify-between w-full">
                <p className={classNames('text-lg sm:text-xl', isLoading && 'skeleton')}>{user?.email}</p>
                <EditEmailModal user={user} />
            </Row>
        </>
    );
};

export default EmailSection;
