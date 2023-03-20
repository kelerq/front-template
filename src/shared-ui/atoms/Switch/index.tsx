import React, { useCallback } from 'react';
import * as Switch from '@radix-ui/react-switch';
import { cva } from 'class-variance-authority';
import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';

const switchRootClasses = cva('w-12 h-6 px-1 bg-white border rounded-full', {
    variants: {
        variant: {
            default: 'border-neutral',
            primary: 'border-primary',
            secondary: 'border-secondary-content',
            accent: 'border-accent-content',
            ghost: 'border-ghost',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const switchThumbClasses = cva('block w-4 h-4 rounded-full float-right', {
    variants: {
        variant: {
            default: 'bg-neutral',
            primary: 'bg-primary',
            secondary: 'bg-secondary-content',
            accent: 'bg-accent-content',
            ghost: 'bg-ghost',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

interface SwitchButtonProps extends VariantProps<typeof switchRootClasses> {
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    variant?;
}

const SwitchButton = ({ className, checked, onChange, variant = 'default' }: SwitchButtonProps) => {
    const rootClasses = switchRootClasses({
        variant,
    });

    const thumbClasses = switchThumbClasses({
        variant,
    });

    const onCheckedChange = useCallback(() => {
        onChange(!checked);
    }, [checked, onChange]);

    const switchClassNames = classNames(
        !checked && 'w-12 h-6 px-1 bg-white border rounded-full border-base-300 ',
        rootClasses,
        className,
    );

    const switchThumbClassNames = classNames(
        !checked && 'block w-4 h-4 rounded-full bg-base-300 -translate-x-5',
        thumbClasses,
        className,
    );
    return (
        <Switch.Root onCheckedChange={onCheckedChange} checked className={switchClassNames}>
            <Switch.Thumb className={switchThumbClassNames} />
        </Switch.Root>
    );
};

export default SwitchButton;
