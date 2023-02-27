import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

const modalClasses = cva('', {
    variants: {
        variant: {},
        size: {
            tiny: 'w-1/6',
            small: 'w-1/4',
            medium: 'w-1/3',
            large: 'w-1/2',

            'tiny-tall': 'w-1/6 h-1/2',
            'small-tall': 'w-1/4 h-1/2',
            'medium-tall': 'w-1/3 h-1/2',
            'large-tall': 'w-1/2 h-1/2',
        },
        color: {},
    },
    defaultVariants: {
        size: 'small',
    },
});

interface ModalProps extends VariantProps<typeof modalClasses> {
    children: React.ReactNode;
    isOpen: boolean;
    onRequestClose: () => void;
}

export const Modal = ({ children, isOpen, onRequestClose, size, color }: ModalProps): JSX.Element => {
    const [isClosing, setIsClosing] = React.useState(false);

    const close = (): void => {
        setIsClosing(true);
        setTimeout(() => {
            onRequestClose();
            setIsClosing(false);
        }, 300);
    };

    return (
        <>
            {isOpen && (
                <div
                    className={classNames(
                        'fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center',
                        {
                            'opacity-0 pointer-events-none': isClosing,
                        },
                        { 'opacity-100 pointer-events-auto': !isClosing },
                        { 'transition-opacity duration-300': !isClosing },
                        { 'transition-opacity duration-300': isClosing },
                    )}
                >
                    <div
                        className={classNames('fixed top-0 left-0 w-full h-full bg-black opacity-50', {
                            'opacity-0 pointer-events-none': isClosing,
                        })}
                        onClick={close}
                    />
                    <div
                        className={classNames(
                            'bg-primary-gradient rounded-lg shadow-lg z-50 mx-auto pointer-events-auto transform transition-all',
                            {
                                'opacity-0 scale-95': isClosing,
                                'opacity-100 scale-100': !isClosing,
                            },
                            { 'transition-opacity duration-300': !isClosing },
                            { 'transition-opacity duration-300': isClosing },
                            { 'transition-transform duration-300': !isClosing },
                            { 'transition-transform duration-300': isClosing },
                            modalClasses({ size, color }),
                        )}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};