import classNames from 'classnames';
import React, { FC } from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}

const Row: FC<Props> = ({ children, className }) => {
    const rowClasses = classNames('flex flex-row', className);

    return <div className={rowClasses}>{children}</div>;
};

export default Row;
