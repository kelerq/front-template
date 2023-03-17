import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

const labelClassesProvider = cva('relative', {
    variants: {
        variant: {
            input: 'bg-transparent text-white-dark',
        },

        size: {
            tiny: 'text-xs mt-3 mb-1',
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
    content?: string | JSX.Element;
    children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ content, children, ...variantProps }) => {
    const labelClasses = labelClassesProvider(variantProps);

    return (
        <>
            {content ? <label className={classNames(labelClasses)}>{content}</label> : <></>}
            {children}
        </>
    );
};

export default Label;
