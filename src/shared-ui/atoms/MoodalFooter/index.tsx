import classNames from 'classnames';
import { cva, VariantProps } from 'class-variance-authority';
import { FC } from 'react';
import React from 'react';

interface ModalFooterProps extends VariantProps<typeof footerClasses> {
    children: React.ReactNode;
    className?: string;
}

const footerClasses = cva('flex flex-row justify-center py-8', {
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

const ModalFooter: FC<ModalFooterProps> = ({ children, size = 'tiny', className }) => {
    const footerClassNames = classNames(footerClasses({ size }), className);

    return <div className={footerClassNames}>{children}</div>;
};

export default ModalFooter;
