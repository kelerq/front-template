import React, { ButtonHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { cva } from 'class-variance-authority';

const buttonClasses = cva('rounded-sm relative transition delay-50 duration-300 text-center align-middle', {
    variants: {
        variant: {
            default: 'bg-neutral text-neutral-content focus:bg-neutral-focus focus:opacity-100 hover:opacity-90',
            primary: 'bg-primary text-primary-content focus:bg-primary-focus focus:opacity-100 hover:opacity-90',
            secondary: 'bg-secondary text-secondary-content focus:bg-secondary-focus focus:opacity-100 hover:opacity-90',
            accent: 'bg-accent text-accent-content focus:bg-accent-focus focus:opacity-100 hover:opacity-90',
            ghost: 'bg-transparent text-neutral focus:text-neutral-focus focus:opacity-100 hover:opacity-90',
            link: 'bg-transparent text-white border border-table-border',
            info: '',
            success: '',
            warning: '',
            error: '',
        },
        modifier: {
            outline: 'bg-transparent border',
            plain: 'bg-inherit border-none shadow-none',
        },
        size: {
            tiny: 'text-xs px-2 h-5',
            small: 'text-sm px-3 h-6',
            medium: 'text-lg px-4 h-8',
            large: 'text-xl  px-6 h-10',
        },
        fullWidth: {
            true: 'w-full',
        },
        isDisabled: {
            true: 'opacity-60 cursor-not-allowed focus:opacity-60 hover:opacity-60',
        },
    },
    compoundVariants: [
        {
            variant: 'default',
            modifier: 'outline',
            className:
                'text-neutral bg-inherit border border-neutral focus:border-neutral-focus focus:text-neutral-focus focus:bg-transparent hover:opacity-80',
        },
        {
            variant: 'primary',
            modifier: 'outline',
            className:
                'text-primary bg-inherit border-primary focus:border-primary-focus focus:text-primary-focus focus:bg-transparent hover:opacity-80',
        },
        {
            variant: 'secondary',
            modifier: 'outline',
            className: 'text-secondary-content bg-inherit border border-secondary-content focus:bg-transparent hover:opacity-80',
        },
        {
            variant: 'accent',
            modifier: 'outline',
            className: 'text-accent-content bg-inherit border border-accent-content focus:bg-transparent hover:opacity-80',
        },
    ],
    defaultVariants: {
        variant: 'default',
        size: 'small',
    },
});

interface ButtonProps extends VariantProps<typeof buttonClasses>, ButtonHTMLAttributes<HTMLButtonElement> {
    loading?: boolean;
    icon?: React.ReactNode;
    href?: string;
    replacePath?: boolean;
}

const Button = ({
    children,
    onClick,
    href,
    loading,
    variant,
    size,
    fullWidth,
    disabled,
    modifier,
    className,
    icon,
    replacePath,
    ...rest
}: ButtonProps) => {
    const buttonClassNames = buttonClasses({
        variant,
        size,
        fullWidth,
        isDisabled: disabled,
        modifier,
    });

    const content = (
        <>
            <span className={classNames('leading-[1.25rem]', loading && 'text-transparent')}>{children}</span>
            {icon && <span className="absolute block w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">{icon}</span>}
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
        </>
    );

    if (href) {
        const linkProps: LinkProps = {
            to: href,
            replace: replacePath,
            className: classNames('flex flex-col justify-center', buttonClassNames, className),
        };

        return <Link {...linkProps}>{content}</Link>;
    }

    const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
        ...rest,
        disabled: disabled || loading,
        className: classNames(buttonClassNames, className),
        onClick,
    };

    return <button {...buttonProps}>{content}</button>;
};

export default Button;
