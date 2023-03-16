import classNames from 'classnames';
import React from 'react';

export const TableToolbar = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div
            className={classNames(
                'flex items-center justify-between bg-table-background border border-table-border p-2',
                className,
            )}
        >
            {children}
        </div>
    );
};
