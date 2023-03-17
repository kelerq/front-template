import React from 'react';
import classNames from 'classnames';
import { cva, VariantProps } from 'class-variance-authority';

interface ModalHeaderProps extends VariantProps<typeof useModalHeaderVariants> {
    children: React.ReactNode;
    className?: string;
}

const useModalHeaderVariants = cva('', {
    variants: {
        size: {
            tiny: 'text-xs font-bold p-2',
            small: 'text-sm font-bold p-3',
            medium: 'text-md font-bold p-4',
            large: 'text-lg font-bold p-5',
        },
        color: {
            white: 'text-white',
        },
        fullWidth: {
            true: 'w-full',
        },
    },

    defaultVariants: {
        size: 'tiny',
        color: 'white',
    },
});
const ModalHeader: React.FC<ModalHeaderProps> = ({ children, className, ...variantProps }) => {
    const headerVariants = useModalHeaderVariants(variantProps);

    return <div className={classNames('flex flex-col', className, headerVariants)}>{children}</div>;
};

export default ModalHeader;
