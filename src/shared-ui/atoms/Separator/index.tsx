import classNames from 'classnames';
import React, { FC } from 'react';
import * as RadixSeparator from '@radix-ui/react-separator';

interface SeparatorProps {
    className?: string;
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
}

const Separator: FC<SeparatorProps> = ({ className, orientation = 'horizontal', decorative }) => {
    const separatorClasses = classNames('h-[0.5px] bg-base-border', className);

    return <RadixSeparator.Root className={separatorClasses} orientation={orientation} decorative={decorative} />;
};

export default Separator;
