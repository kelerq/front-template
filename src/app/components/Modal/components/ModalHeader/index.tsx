import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

const headerClasses = cva('', {
    variants: {
        variant: {},
        size: {
            tiny: 'text-xs font-bold p-2',
            small: 'text-sm  font-bold p-3',
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

interface ModalHeaderProps extends VariantProps<typeof headerClasses> {
    children: React.ReactNode;
    className?: string;
}

export const ModalHeader = ({ children, className, variant, size, fullWidth }: ModalHeaderProps) => {
    return (
        <>
            <div className={classNames('flex flex-col', className, headerClasses({ size, variant, fullWidth }))}>{children}</div>
        </>
    );
};
