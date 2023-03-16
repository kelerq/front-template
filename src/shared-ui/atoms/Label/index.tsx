import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

const labelClasses = cva('relative', {
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

interface LabelProps extends VariantProps<typeof labelClasses> {
    id?: string;
    content?: string | JSX.Element;
    children: React.ReactNode;
}

export const Label = ({ content, children }: LabelProps) => {
    return (
        <>
            {content ? <label className={classNames(labelClasses())}>{content}</label> : <></>}
            {children}
        </>
    );
};
