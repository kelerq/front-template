import * as Form from '@radix-ui/react-form';
import React from 'react';

interface ISubmitProps {
    children: React.ReactNode;
    className?: string;
    asChild?: boolean;
}

const FormSubmit: React.FC<ISubmitProps> = ({ children, className, asChild }) => {
    return (
        <Form.Submit className={className} asChild={asChild}>
            {children}
        </Form.Submit>
    );
};

export default FormSubmit;
