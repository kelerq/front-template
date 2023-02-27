import classNames from 'classnames';
import React from 'react';

interface ColProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export const Col = ({ children, title, className }: ColProps) => {
    return (
        <div className={classNames('flex flex-col space-y-3 p-8', className)}>
            {title ? <h1 className="mb-5 text-lg font-bold border-b">{title}</h1> : <></>}
            {children}
        </div>
    );
};
