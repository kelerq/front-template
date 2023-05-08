import * as Toast from '@radix-ui/react-toast';

import React from 'react';

interface ToastRootProps {
    children: React.ReactNode;
    type?: 'foreground' | 'background';
    duration?: number;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    onEscapeKeyDown?: () => void;
    onPause?: () => void;
    onResume?: () => void;
    onSwipeStart?: () => void;
    onSwipeMove?: () => void;
    onSwipeEnd?: () => void;
    forceMount?: true | undefined;
    className?: string;
}

export const ToastRoot: React.FC<ToastRootProps> = ({
    children,
    type,
    duration,
    open,
    onOpenChange,
    onEscapeKeyDown,
    onPause,
    onResume,
    onSwipeEnd,
    onSwipeMove,
    onSwipeStart,
    defaultOpen,
    className,
    forceMount,
}) => {
    return (
        <Toast.Root
            type={type}
            duration={duration}
            open={open}
            onOpenChange={onOpenChange}
            onEscapeKeyDown={onEscapeKeyDown}
            onPause={onPause}
            onResume={onResume}
            onSwipeEnd={onSwipeEnd}
            onSwipeMove={onSwipeMove}
            onSwipeStart={onSwipeStart}
            defaultOpen={defaultOpen}
            forceMount={forceMount}
            className={className}
        >
            {children}
        </Toast.Root>
    );
};
