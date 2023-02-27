import React from 'react';
import { Link } from 'react-router-dom';
import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { buttonClasses } from '../classes/buttonClasses';

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
