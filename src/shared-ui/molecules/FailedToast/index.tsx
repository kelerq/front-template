import { CloseIcon, CrossCircledIcon } from 'assets/icons/icons';
import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useToast } from 'shared-hooks/useToast';
import Button from 'shared-ui/atoms/Button';
import { ToastClose } from 'shared-ui/atoms/Toast/ToastClose';
import { ToastDescription } from 'shared-ui/atoms/Toast/ToastDescription';
import { ToastRoot } from 'shared-ui/atoms/Toast/ToastRoot';

interface FailedToastProps {
    className?: string;
}

export const FailedToast = forwardRef((props: FailedToastProps, ref) => {
    const { className } = props;
    const { open, showToast, closeToast, description, setDescription } = useToast();

    const setupToast = (description: string) => {
        setDescription(description);
        showToast();
    };

    useImperativeHandle(ref, () => {
        return {
            setupToast,
            showToast,
            closeToast,
        };
    });

    return (
        <ToastRoot
            className={classNames(
                'z-50 fixed shadow-lg rounded-l-lg bottom-4 right-0',
                'bg-[#FEE2E5] border-l-8 border-error',
                'data-[state=open]:animate-enterFromRight data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
                'data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut',
                className,
            )}
            open={open}
            key="success-toast"
        >
            <div className="grid items-center h-full grid-cols-12 grid-rows-1 p-4">
                <CrossCircledIcon className="col-start-1 col-end-2 row-start-1 row-end-2 w-[3rem] h-[3rem] fill-error" />
                <ToastDescription className="col-start-3 col-end-12 row-start-1 row-end-2">
                    <span className="text-2xl text-error">{description}</span>
                </ToastDescription>
                <ToastClose className="col-start-12 col-end-13 row-start-1 row-end-2">
                    <Button variant="ghost" onClick={closeToast}>
                        <CloseIcon className="w-[1rem] h-[1rem] stroke-error" />
                    </Button>
                </ToastClose>
            </div>
        </ToastRoot>
    );
});
