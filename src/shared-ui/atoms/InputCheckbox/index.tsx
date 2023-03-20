import classNames from 'classnames';
import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckIcon } from '@radix-ui/react-icons';
import React, { FC, useCallback } from 'react';
import _uniqueId from 'lodash/uniqueId';
import { cva, VariantProps } from 'class-variance-authority';
import Row from '../Row';

const createCheckboxClasses = () => {
    return cva('w-4 h-4 rounded-lg', {
        variants: {
            variant: {
                default: 'bg-neutral',
                primary: 'bg-primary',
                secondary: 'bg-secondary-content',
                accent: 'bg-accent-content',
            },
            isDisabled: {
                true: 'opacity-60 cursor-not-allowed focus:opacity-60 hover:opacity-60',
            },
        },
        compoundVariants: [],
        defaultVariants: {
            variant: 'default',
        },
    });
};

const checkboxClasses = createCheckboxClasses();

interface InputCheckboxProps extends VariantProps<typeof checkboxClasses> {
    label?: string;
    className?: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
}

const InputCheckbox: FC<InputCheckboxProps> = ({ label, className, checked, onChange, disabled, variant = 'default' }) => {
    const id = _uniqueId('id-');

    const inputCheckboxClassNames = checkboxClasses({
        variant,
        isDisabled: disabled,
    });

    const onCheckedChange = useCallback(() => {
        onChange(!checked);
    }, [checked, onChange]);

    const checkBoxClassNames = classNames(
        !checked && 'bg-transparent border border-base-300',
        inputCheckboxClassNames,
        className,
    );

    return (
        <form>
            <Row>
                <Checkbox.Root
                    checked={checked}
                    onCheckedChange={onCheckedChange}
                    disabled={disabled}
                    className={checkBoxClassNames}
                    id={id}
                >
                    <Checkbox.Indicator>
                        <CheckIcon className="w-4 h-4 text-white" />
                    </Checkbox.Indicator>
                </Checkbox.Root>
                <label id={id} className="ml-2 text-lg">
                    {label}
                </label>
            </Row>
        </form>
    );
};

export default InputCheckbox;
