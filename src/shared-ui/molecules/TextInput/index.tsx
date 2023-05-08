import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { cva } from 'class-variance-authority';

const inputClasses = cva('w-full rounded-lg bg-transparent outline-none', {
    variants: {
        variant: {
            default: 'border border-base-border focus:border-base-400',
            secondary: '',
            tertiary: '',
        },
        dimensions: {
            small: 'text-sm px-3 h-7',
            medium: 'text-md px-4 h-8',
            large: 'text-lg px-6 h-12',
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
        dimensions: 'small',
    },
});

interface TextInputProps extends VariantProps<typeof inputClasses> {
    disabled?: boolean;
    password?: boolean;
    autofocus?: boolean;
    value?: any;
    placeholder?: string;
    error?: string;
    className?: string;
    containerClassName?: string;
    onChange?: (newValue: any) => void;
    onClick?: () => void;
    register?: any;
    ref?: React.Ref<HTMLInputElement>;
}

export const TextInput: React.FC<TextInputProps & InputHTMLAttributes<HTMLInputElement>> = React.forwardRef(
    (
        {
            className,
            containerClassName,
            value,
            onChange,
            onClick,
            placeholder,
            dimensions,
            error,
            password,
            size,
            register,
            disabled,
            ...restProps
        },
        ref,
    ) => {
        const [text, setText] = useState(value || '');
        const prevValue = useRef(value);

        useEffect(() => {
            if (value !== prevValue.current) {
                setText(value);
                prevValue.current = value;
            }
        }, [value]);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;
            setText(newValue);
            onChange?.(e);
        };

        return (
            <input
                className={classNames(inputClasses({ fullWidth: restProps.fullWidth, dimensions }), className)}
                value={text}
                onChange={handleChange}
                onClick={onClick}
                ref={ref}
                placeholder={placeholder}
                disabled={disabled}
                pattern={restProps.pattern}
                {...restProps}
                {...register}
            />
        );
    },
);

export default TextInput;
