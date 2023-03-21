import classNames from 'classnames';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import React from 'react';

interface ModalFooterProps extends VariantProps<typeof footerClasses> {
    children: React.ReactNode;
    className?: string;
}

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

const ModalFooter: FC<ModalFooterProps> = ({ children, className, size = 'tiny' }) => {
    const footerClassNames = classNames('flex flex-row justify-center py-8', className, footerClasses({ size }));

    return <div className={footerClassNames}>{children}</div>;
};

export default ModalFooter;
