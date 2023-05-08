import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import classNames from 'classnames';

const tooltipContentClasses = cva('', {
    variants: {
        variant: {},
        size: {
            tiny: 'md:w-1/4 xl:w-1/6',
            small: 'md:w-1/2 xl:w-1/4',
            medium: 'md:w-1/2 xl:w-1/3',
            large: 'md:w-1/2',

            'tiny-tall': 'md:w-1/4 xl:w-1/6 h-1/2',
            'small-tall': 'md:w-1/2 xl:w-1/4 h-1/2',
            'medium-tall': 'md:w-1/2 xl:w-1/3 h-1/2',
            'large-tall': 'md:w-1/2 h-1/2',
        },
    },
    defaultVariants: {
        size: 'small',
    },
});

interface TooltipContentProps extends VariantProps<typeof tooltipContentClasses> {
    children: React.ReactNode;
    className?: string;
}

export const TooltipContent = React.forwardRef<HTMLDivElement, TooltipContentProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <TooltipPrimitive.Content
            {...props}
            className={classNames(
                'data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade',
                'data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade',
                'select-none rounded-lg bg-white leading-none shadow-xl will-change-[transform,opacity] p-4',
                className,
            )}
        >
            {children}
            <TooltipPrimitive.Arrow className="fill-white" width={11} height={5} />
        </TooltipPrimitive.Content>
    ),
);
