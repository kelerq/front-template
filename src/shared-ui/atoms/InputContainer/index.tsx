import classNames from 'classnames';
import React from 'react';

export interface InputContainerProps {
    children: React.ReactNode;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    className?: string;
}

export const InputContainer: React.FC<InputContainerProps> = ({ children, onKeyDown, className }) => {
    const containerClasses = classNames('flex flex-col items-start', className);

    return (
        <div className={containerClasses} onKeyDown={onKeyDown}>
            {children}
        </div>
    );
};
