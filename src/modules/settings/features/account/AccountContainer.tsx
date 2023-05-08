import React from 'react';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import Row from 'shared-ui/atoms/Row';
import Avatar from 'shared-ui/atoms/Avatar';
import Separator from 'shared-ui/atoms/Separator';
import { useAuthenticatedUser } from 'shared-hooks/useAuthenticatedUser';
import classNames from 'classnames';
import NameSection from './NameSection';
import EmailSection from './EmailSection';
import PasswordSection from './PasswordSection';

export function AccountContainer(): JSX.Element {
    const { isLoading, user } = useAuthenticatedUser();

    return (
        <Container className="h-full px-0 text-center sm:px-8">
            <Col className="items-center w-full px-0">
                <Row className="flex-col items-center sm:justify-start sm:w-full sm:flex-row">
                    <Avatar className={classNames('w-[8.5rem] h-[8.5rem]')} skeleton={isLoading} />
                    <p className={classNames('ml-6 text-2xl font-bold', isLoading && 'skeleton')}>
                        {user?.firstName} {user?.lastName}
                    </p>
                </Row>
                <Separator className="bg-base-border data-[orientation=horizontal]:h-[0.05rem] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                <Row className="w-full">
                    <Col className="items-start w-full">
                        <NameSection isLoading={isLoading} user={user} />
                    </Col>
                </Row>
                <Separator className="bg-base-border data-[orientation=horizontal]:h-[0.05rem] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                <Row className="w-full">
                    <Col className="items-start w-full">
                        <EmailSection isLoading={isLoading} user={user} />
                    </Col>
                </Row>
                <Separator className="bg-base-border data-[orientation=horizontal]:h-[0.05rem] data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
                <Row className="w-full">
                    <Col className="items-start w-full">
                        <PasswordSection isLoading={isLoading} user={user} />
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}
