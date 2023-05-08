import * as Toast from '@radix-ui/react-toast';

import React from 'react';

interface ToastCloseProps {
    children: React.ReactNode;
    className?: string;
}

export const ToastClose: React.FC<ToastCloseProps> = ({ children, className }) => {
    return (
        <Toast.Close asChild className={className}>
            {children}
        </Toast.Close>
    );
};
