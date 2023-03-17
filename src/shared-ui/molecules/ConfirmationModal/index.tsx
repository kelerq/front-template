import { FC } from 'react';
import Button from 'shared-ui/atoms/Button';
import { Modal } from 'shared-ui/atoms/Modal';
import ModalBody from 'shared-ui/atoms/ModalBody';
import ModalHeader from 'shared-ui/atoms/ModalHeader';
import ModalFooter from 'shared-ui/atoms/MoodalFooter';
import React from 'react';

interface ConfirmationModalProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
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
        <ModalHeader size="large">{title}</ModalHeader>
        <ModalBody className={className} size="medium">
            {children}
        </ModalBody>
        <ModalFooter className={className}>
            <Button onClick={onConfirm} className="mr-2" size="medium" variant="primary" modifier="outline" loading={loading}>
                Confirm
            </Button>
            <Button onClick={onClose} size="medium" modifier="outline" disabled={loading}>
                Cancel
            </Button>
        </ModalFooter>
    </Modal>
);
