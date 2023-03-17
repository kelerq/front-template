import classNames from 'classnames';
import React, { FC } from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
    const containerClasses = classNames('max-w-[192rem] mx-auto px-8', className);

    return <div className={containerClasses}>{children}</div>;
};

export default Container;
