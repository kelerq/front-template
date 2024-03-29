import { CheckCircledIcon, CloseIcon } from 'assets/icons/icons';
import classNames from 'classnames';
import React, { forwardRef, useImperativeHandle } from 'react';
import { useToast } from 'shared-hooks/useToast';
import Button from 'shared-ui/atoms/Button';
import { ToastClose } from 'shared-ui/atoms/Toast/ToastClose';
import { ToastDescription } from 'shared-ui/atoms/Toast/ToastDescription';
import { ToastRoot } from 'shared-ui/atoms/Toast/ToastRoot';

interface SuccessToastProps {
    className?: string;
}

export const SuccessToast = forwardRef((props: SuccessToastProps, ref) => {
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
                'z-50  fixed shadow-lg rounded-l-lg bottom-4 right-0',
                'bg-[#E6FFF1] border-l-8 border-success',
                'data-[state=open]:animate-enterFromRight data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)]',
                'data-[swipe=end]:animate-swipeOut data-[swipe=cancel]:transition-[transform_200ms_ease-out]',
                className,
            )}
            open={open}
            key="success-toast"
            onSwipeEnd={closeToast}
        >
            <div className="grid items-center h-full grid-cols-12 grid-rows-1 p-4">
                <CheckCircledIcon className="col-start-1 col-end-2 row-start-1 row-end-2 w-[3rem] h-[3rem] fill-success" />
                <ToastDescription className="col-start-2 col-end-12 row-start-1 row-end-2">
                    <span className="text-2xl text-success">{description}</span>
                </ToastDescription>
                <ToastClose className="col-start-13 row-start-1 row-end-2 col-end-14">
                    <Button variant="ghost" onClick={closeToast}>
                        <CloseIcon className="w-[1.5rem] h-[1.5rem] stroke-success" />
                    </Button>
                </ToastClose>
            </div>
        </ToastRoot>
    );
});
