import React from 'react';
import * as Form from '@radix-ui/react-form';

interface ILabelProps {
    children: React.ReactNode;
    className?: string;
}

const FormLabel: React.FC<ILabelProps> = ({ children, className }) => {
    return <Form.Label className={className}>{children}</Form.Label>;
};

export default FormLabel;
