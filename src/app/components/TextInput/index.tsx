import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { inputClasses } from '../classes/inputClasses';
import { InputContainer } from '../InputContainer';
import { Label } from '../Label';

export interface TextProps extends VariantProps<typeof inputClasses> {
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
                    {...props.register}
                />
                {props.error && <div className="text-red-500 text-xs mt-2">{props.error}</div>}
            </Label>
        </InputContainer>
    );
});
