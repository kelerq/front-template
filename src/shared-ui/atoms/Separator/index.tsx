import classNames from 'classnames';
import React, { FC } from 'react';

interface SeparatorProps {
    className?: string;
}

const Separator: FC<SeparatorProps> = ({ className }) => {
    const separatorClasses = classNames('h-[0.5px] bg-base-border', className);

    return <div className={separatorClasses} />;
};

export default Separator;
