import * as Form from '@radix-ui/react-form';
import React from 'react';

interface IControlProps {
    asChild?: boolean;
    type?: string;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    children: React.ReactNode;
    className?: string;
}

const FormControl: React.FC<IControlProps> = ({ asChild, type, required, onChange, children, className }) => {
    return (
        <Form.Control asChild={asChild} type={type} required={required} onChange={onChange} className={className}>
            {children}
        </Form.Control>
    );
};

export default FormControl;
