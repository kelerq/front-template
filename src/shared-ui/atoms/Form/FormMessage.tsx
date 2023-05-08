import * as Form from '@radix-ui/react-form';
import React from 'react';

interface IMessageProps {
    match: any;
    forceMatch?: boolean;
    children: React.ReactNode;
    className?: string;
}

const FormMessage: React.FC<IMessageProps> = ({ match, forceMatch, children, className }) => {
    return (
        <Form.Message match={match} forceMatch={forceMatch} className={className}>
            {children}
        </Form.Message>
    );
};

export default FormMessage;
