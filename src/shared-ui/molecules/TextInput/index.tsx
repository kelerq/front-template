import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { InputContainer } from 'shared-ui/atoms/InputContainer';

import { cva } from 'class-variance-authority';
import Label from 'shared-ui/atoms/Label';
import { ErrorMessage } from 'shared-ui/atoms/ErrorMessage';

const inputClasses = cva('w-full rounded-lg bg-transparent outline-none', {
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

type TextInputProps = VariantProps<typeof inputClasses> & {
    disabled?: boolean;
    password?: boolean;
    autofocus?: boolean;
    label?: string | JSX.Element;
    value?: any;
    placeholder?: string;
    error?: string;
    className?: string;
    containerClassName?: string;
    onChange?: (newValue: any) => void;
    onClick?: () => void;
    register?: any;
};

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
    (
        {
            disabled,
            error,
            label,
            password,
            placeholder,
            value,
            className,
            containerClassName,
            onChange,
            onClick,
            register,
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
            onChange?.(newValue);
        };

        return (
            <InputContainer className={classNames(containerClassName)}>
                <Label content={label}>
                    <input
                        className={classNames(inputClasses({ fullWidth: restProps.fullWidth }), className)}
                        value={text}
                        onChange={handleChange}
                        onClick={onClick}
                        type={password ? 'password' : 'text'}
                        ref={ref}
                        placeholder={placeholder}
                        disabled={disabled}
                        {...register}
                    />
                    {error && <ErrorMessage message={error} visible />}
                </Label>
            </InputContainer>
        );
    },
);

export default TextInput;
