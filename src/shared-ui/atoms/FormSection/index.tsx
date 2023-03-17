import classNames from 'classnames';
import React, { FC } from 'react';

interface FormSectionProps {
    children: React.ReactNode;
    onSubmit?: () => void;
    className?: string;
}

export const FormSection: FC<FormSectionProps> = ({ children, onSubmit, className }) => {
    return (
        <form onSubmit={onSubmit} className={classNames(className)}>
            {children}
        </form>
    );
};

interface FormSectionHeaderProps {
    children: React.ReactNode;
    className?: string;
}

export const FormSectionHeader: FC<FormSectionHeaderProps> = ({ children, className }) => {
    return <h3 className={classNames(className, 'text-xl')}>{children}</h3>;
};
