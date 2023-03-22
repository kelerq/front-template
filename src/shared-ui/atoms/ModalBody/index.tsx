import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

const bodyClassesProvider = cva('', {
    variants: {
        size: {
            tiny: 'text-xs p-2',
            small: 'text-sm p-3',
            medium: 'text-md p-4',
            large: 'text-lg p-5',
        },
        defaultVariants: {
            size: 'small',
        },
    },
});

interface ModalBodyProps extends VariantProps<typeof bodyClassesProvider> {
    children: React.ReactNode;
    className?: string;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className, ...variantProps }) => {
    const bodyClasses = bodyClassesProvider(variantProps);

    return (
        <>
            <div className={classNames('flex flex-col items-center gap-y-5', className, bodyClasses)}>{children}</div>
        </>
    );
};

export default ModalBody;
