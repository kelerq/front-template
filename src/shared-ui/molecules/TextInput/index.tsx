import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { InputContainer } from 'shared-ui/atoms/InputContainer';
import { Label } from 'shared-ui/atoms/Label';

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

export interface TextProps extends VariantProps<typeof inputClasses> {
    disabled?: boolean;
    password?: boolean;
    autofocus?: boolean;
    label?: string | JSX.Element;
    value?: any;
    placeholder?: string;
    className?: string;
    containerClassName?: string;
    onChange?: (newValue: any) => void;
    onClick?: () => void;
    register?: any;
    error?: string;
}

export const TextInput = React.forwardRef<HTMLInputElement, TextProps>((props, ref) => {
    const [text, setText] = useState(props.value || '');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(e.target.value);
        setText(e.target.value);
    };
    useEffect(() => {
        setText(props.value);
    }, [props.value]);

    return (
        <InputContainer className={classNames(props.containerClassName)}>
            <Label content={props.label}>
                <input
                    className={classNames(inputClasses({ fullWidth: props.fullWidth }), props.className)}
                    value={text}
                    onChange={onChange}
                    onClick={props.onClick}
                    type={props.password ? 'password' : 'text'}
                    ref={ref}
                    placeholder={props.placeholder}
                    disabled={props.disabled}
                    {...props.register}
                />
                {props.error && <div className="mt-2 text-xs text-destructive">{props.error}</div>}
            </Label>
        </InputContainer>
    );
});
