import * as Toast from '@radix-ui/react-toast';

import React from 'react';

interface ToastTitleProps {
    children: React.ReactNode;
    className?: string;
}

export const ToastTitle: React.FC<ToastTitleProps> = ({ children, className }) => {
    return (
        <Toast.Title asChild className={className}>
            {children}
        </Toast.Title>
    );
};
