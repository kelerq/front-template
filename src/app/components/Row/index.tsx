import classNames from 'classnames';
import React from 'react';

interface RowProps {
    children: React.ReactNode;
    className?: string;
}

export const Row = ({ children, className }: RowProps) => {
    return <div className={classNames('flex flex-row', className)}>{children}</div>;
};
