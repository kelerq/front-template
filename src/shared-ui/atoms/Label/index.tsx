import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import * as RadixLabel from '@radix-ui/react-label';
import React from 'react';

const labelClassesProvider = cva('', {
    variants: {
        variant: {
            input: 'bg-transparent text-base-content',
        },
        size: {
            tiny: 'text-xs',
            small: 'text-sm',
            medium: 'text-md',
            large: 'text-lg',
        },
        fullWidth: {
            true: 'w-full',
        },
    },
    defaultVariants: {
        variant: 'input',
        size: 'tiny',
    },
});

interface LabelProps extends VariantProps<typeof labelClassesProvider> {
    id?: string;
    htmlFor: string;
    children: React.ReactNode;
    className?: string;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children, className, ...variantProps }) => {
    const labelClasses = labelClassesProvider(variantProps);

    return (
        <RadixLabel.Root className={classNames(labelClasses, className)} htmlFor={htmlFor}>
            {children}
        </RadixLabel.Root>
    );
};

export default Label;
