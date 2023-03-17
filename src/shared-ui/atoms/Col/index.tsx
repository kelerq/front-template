import classNames from 'classnames';
import React from 'react';

interface ColProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

const Col: React.FC<ColProps> = ({ children, title, className }) => {
    const containerClasses = classNames('flex flex-col space-y-3 p-8', className);

    return (
        <div className={containerClasses}>
            {title && <h1 className="mb-5 text-lg font-bold border-b">{title}</h1>}
            {children}
        </div>
    );
};

export default Col;
