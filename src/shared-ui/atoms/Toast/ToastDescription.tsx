import * as Toast from '@radix-ui/react-toast';

import React from 'react';

interface ToastDescriptionProps {
    children: React.ReactNode;
    className?: string;
}

export const ToastDescription: React.FC<ToastDescriptionProps> = ({ children, className }) => {
    return (
        <Toast.Title asChild className={className}>
            {children}
        </Toast.Title>
    );
};
