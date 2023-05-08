import * as Toast from '@radix-ui/react-toast';

import React from 'react';

interface ToastActionProps {
    children: React.ReactNode;
    className?: string;
    altText: string;
}

export const ToastAction: React.FC<ToastActionProps> = ({ children, className, altText }) => {
    return (
        <Toast.Action asChild className={className} altText={altText}>
            {children}
        </Toast.Action>
    );
};
