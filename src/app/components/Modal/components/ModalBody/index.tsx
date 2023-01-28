import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

const bodyClasses = cva('', {
    variants: {
        size: {
            tiny: 'text-xs p-2',
            small: 'text-sm p-3',
            medium: 'text-md p-4',
            large: 'text-lg p-5',
        },
    },
    defaultVariants: {
        size: 'small',
    },
});

interface ModalBodyProps extends VariantProps<typeof bodyClasses> {
    children: React.ReactNode;
    className?: string;
}

export const ModalBody = ({ children, className, size }: ModalBodyProps) => {
    return (
        <>
            <div className={classNames('flex flex-col', className, bodyClasses({ size }))}>{children}</div>
        </>
    );
};
