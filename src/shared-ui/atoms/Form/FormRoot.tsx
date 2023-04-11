import * as Form from '@radix-ui/react-form';
import React from 'react';

interface IFormProps {
    onSubmit: (data: any) => void;
    children: React.ReactNode;
    className?: string;
}

const FormRoot: React.FC<IFormProps> = ({ onSubmit, children, className }) => {
    return (
        <Form.Root
            onSubmit={event => {
                const formData = new FormData(event.currentTarget);
                onSubmit(Object.fromEntries(formData));
                event.preventDefault();
            }}
            className={className}
        >
            {children}
        </Form.Root>
    );
};

export default FormRoot;
