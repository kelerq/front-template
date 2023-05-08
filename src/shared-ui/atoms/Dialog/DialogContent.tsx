import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { CloseIcon } from 'assets/icons/icons';
import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';

const dialogContentClasses = cva('', {
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

interface DialogContentProps extends VariantProps<typeof dialogContentClasses> {
    children: React.ReactNode;
    className?: string;
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(
    ({ children, className, ...props }, forwardedRef) => (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 top-0 left-0 z-20 w-full h-full bg-black opacity-50" />

            <DialogPrimitive.Content
                {...props}
                ref={forwardedRef}
                className={classNames(
                    'z-30 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none',
                    'data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut',
                    dialogContentClasses(props),
                    'w-full',
                    className,
                )}
            >
                <div className="flex justify-end">
                    <DialogPrimitive.Close aria-label="Close">
                        <CloseIcon className="w-[1.4rem] h-[1.4.rem]" />
                    </DialogPrimitive.Close>
                </div>
                <div>{children}</div>
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    ),
);
