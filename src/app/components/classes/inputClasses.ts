import { cva } from 'class-variance-authority';

export const inputClasses = cva('w-full rounded-lg bg-transparent outline-none', {
    variants: {
        variant: {
            default: 'border border-gray hover:border-gray-hover focus:border-purple',
            secondary: '',
            tertiary: '',
        },
        size: {
            small: 'text-xs px-3 h-7',
            medium: 'text-sm px-4 h-8',
            large: 'text-md px-6 h-12',
        },
        width: {
            small: 'w-48',
            medium: 'w-64',
            large: 'w-96',
        },
        fullWidth: {
            true: 'w-full',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'small',
    },
});
