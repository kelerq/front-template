import { cva } from 'class-variance-authority';

export const labelClasses = cva('relative', {
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
