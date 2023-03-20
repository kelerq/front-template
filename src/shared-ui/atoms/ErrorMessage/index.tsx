import React, { FC, ReactNode } from 'react';

interface ErrorMessageProps {
    message: string;
    visible: boolean;
    children?: ReactNode;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({ message, visible, children }) => {
    if (!visible) {
        return null;
    }

    return (
        <div>
            <p>{message}</p>
            {children}
        </div>
    );
};
