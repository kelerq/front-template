import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    className?: string;
}

const TableToolbar = ({ children, className }: Props) => {
    const toolbarClasses = classNames(
        'flex items-center justify-between bg-table-background border border-table-border p-2',
        className,
    );

    return <div className={toolbarClasses}>{children}</div>;
};

export default TableToolbar;
