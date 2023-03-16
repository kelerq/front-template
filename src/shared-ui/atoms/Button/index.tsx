import React from 'react';
import { Link } from 'react-router-dom';
import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const buttonClasses = cva('rounded-md relative', {
    variants: {
        variant: {
            default:
                'bg-gray text-white-dark shadow-primary border border-gray-dark hover:bg-gray-hover hover:border-dark-gray-hover',
            primary:
                'bg-purple text-white shadow-primary border border-purple hover:bg-purple-light hover:text-shadow hover:shadow-primary',
            secondary: '',
            destructive:
                'bg-destructive text-white shadow-primaryborder border-destructive hover:bg-destructive-hover hover:text-shadow hover:shadow-primary',
            monochrome: 'bg-white text-white border border-gray-400',
            table: 'bg-transparent text-white border border-table-border',
        },
        modifier: {
            outline: 'bg-transparent border shadow-[0_0_0_1px_current] hover:bg-transparent',
            plain: 'bg-transparent border-none shadow-none px-2 py-1 text-sm',
        },
        size: {
            tiny: 'text-xs',
            small: 'text-sm',
            medium: 'text-md',
            large: 'text-lg',
        },
        width: {
            small: 'w-48',
            medium: 'w-64',
            large: 'w-96',
        },
        fullWidth: {
            true: 'w-full',
        },
        disabled: {
            true: 'opacity-60 cursor-not-allowed',
        },
    },
    compoundVariants: [
        {
            modifier: 'outline',
            variant: 'destructive',
            className: 'hover:border-destructive-hover',
        },
        {
            modifier: 'outline',
            variant: 'default',
            className: 'hover:border-gray-dark-hover',
        },
        {
            modifier: 'outline',
            variant: 'primary',
            className: 'hover:border-purple-light',
        },
        {
            modifier: 'outline',
            variant: 'primary',
            className: 'text-primary',
        },
        {
            modifier: 'plain',
            variant: 'destructive',
            className: 'text-destructive',
        },
        {
            modifier: 'plain',
            variant: 'primary',
            className: 'text-primary',
        },
        {
            modifier: undefined,
            size: 'small',
            className: 'px-3 py-[3px]',
        },
        {
            modifier: 'outline',
            size: 'small',
            className: 'px-3 py-[3px]',
        },
        {
            modifier: undefined,
            size: 'medium',
            className: 'px-4 py-2',
        },
        {
            modifier: 'outline',
            size: 'medium',
            className: 'px-4 py-2',
        },
        {
            modifier: undefined,
            size: 'large',
            className: 'px-6 py-3',
        },
        {
            modifier: 'outline',
            size: 'large',
            className: 'px-6 py-3',
        },
    ],
    defaultVariants: {
        variant: 'default',
        size: 'medium',
    },
});

interface ButtonProps extends VariantProps<typeof buttonClasses>, React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    href?: string;
    replacePath?: boolean;
    loading?: boolean;
    onClick?: () => void;
    className?: string;
    icon?: React.ReactNode;
}

export const Button = ({
    children,
    onClick,
    href,
    loading,
    variant,
    size,
    width,
    fullWidth,
    disabled,
    modifier,
    className,
    icon,
    replacePath,
    ...props
}: ButtonProps) => {
    return (
        <>
            {href ? (
                <Link
                    to={href}
                    replace={replacePath}
                    className={classNames(className, buttonClasses({ variant, size, width, fullWidth, disabled, modifier }))}
                >
                    <span className={classNames('leading-[1.25rem]', loading && 'text-transparent')}>{children}</span>
                    {icon && (
                        <span className="absolute block w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">{icon}</span>
                    )}
                    {loading && (
                        <span className="absolute block w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <svg className="animate-spin" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="fill-current"
                                    d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
                                ></path>
                            </svg>
                            <span className="sr-only">Loading</span>
                        </span>
                    )}
                </Link>
            ) : (
                <button
                    className={classNames(className, buttonClasses({ variant, size, width, fullWidth, disabled, modifier }))}
                    onClick={onClick}
                >
                    <span className={classNames('leading-[1.25rem]', loading && 'text-transparent')}>{children}</span>
                    {icon && (
                        <span className="absolute block w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">{icon}</span>
                    )}
                    {loading && (
                        <span className="absolute block w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            <svg className="animate-spin" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    className="fill-current"
                                    d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
                                ></path>
                            </svg>
                            <span className="sr-only">Loading</span>
                        </span>
                    )}
                </button>
            )}
        </>
    );
};
