import * as Form from '@radix-ui/react-form';
import React from 'react';

interface IFieldProps {
    name: string;
    serverInvalid?: boolean;
    children: React.ReactNode;
    className?: string;
}

const FormField: React.FC<IFieldProps> = ({ name, serverInvalid, children, className }) => {
    return (
        <Form.Field name={name} serverInvalid={serverInvalid} className={className}>
            {children}
        </Form.Field>
    );
};

export default FormField;
