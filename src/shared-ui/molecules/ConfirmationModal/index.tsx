import { FC } from 'react';
import Button from 'shared-ui/atoms/Button';
import { Modal } from 'shared-ui/atoms/Modal';
import ModalBody from 'shared-ui/atoms/ModalBody';
import ModalHeader from 'shared-ui/atoms/ModalHeader';
import ModalFooter from 'shared-ui/atoms/MoodalFooter';
import React from 'react';
import { ExclamationIcon, CloseIcon } from 'assets/icons/icons';

interface ConfirmationModalProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    loading?: boolean;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
    children,
    className,
    isOpen,
    onClose,
    onConfirm,
    title,
    loading,
}) => (
    <Modal isOpen={isOpen} onRequestClose={onClose} size="small">
        <ModalHeader size="large" className="items-end">
            <button onClick={onClose}>
                <CloseIcon className="w-[1.4rem] h-[1.4.rem]" viewBox="0 0 14 14" />
            </button>
        </ModalHeader>
        <ModalBody className={className} size="medium">
            <ExclamationIcon className="w-[10rem] h-[10rem]" viewBox="0 0 100 100" />
            <span className="text-2xl text-center">{children}</span>
        </ModalBody>
        <ModalFooter className={className}>
            <Button onClick={onConfirm} className="mr-2" size="medium" variant="primary" loading={loading}>
                Potwierdź
            </Button>
            <Button onClick={onClose} size="medium" variant="accent" disabled={loading}>
                Zamknij
            </Button>
        </ModalFooter>
    </Modal>
);
