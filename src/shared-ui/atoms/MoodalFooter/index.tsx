import React from 'react';
import classNames from 'classnames';
import { cva, VariantProps } from 'class-variance-authority';

const footerClasses = cva('', {
    variants: {
        size: {
            tiny: 'text-xs p-2',
            small: 'text-sm p-3',
            medium: 'text-md p-4',
            large: 'text-lg p-5',
        },
    },
    defaultVariants: {
        size: 'tiny',
    },
});

interface ModalFooterProps extends VariantProps<typeof footerClasses> {
    children: React.ReactNode;
    className?: string;
}

export const ModalFooter = ({ children, className, size }: ModalFooterProps) => {
    return (
        <>
            <div
                className={classNames(
                    'flex flex-row justify-end border-t border-white-a08',
                    className,
                    footerClasses({
                        size,
                    }),
                )}
            >
                {children}
            </div>
        </>
    );
};
