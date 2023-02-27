import { Button } from '../Button';
import { Modal } from '../Modal';
import { ModalBody } from '../Modal/components/ModalBody';
import { ModalHeader } from '../Modal/components/ModalHeader';
import { ModalFooter } from '../Modal/components/MoodalFooter';
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

export const ConfirmationModal = ({
    children,
    className,
    isOpen,
    onClose,
    onConfirm,
    title,
    loading,
}: ConfirmationModalProps): JSX.Element => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} size="small">
            <ModalHeader size="large">{title}</ModalHeader>
            <ModalBody className={className} size="medium">
                {children}
            </ModalBody>
            <ModalFooter className={className}>
                <Button onClick={onConfirm} className="mr-2" size="medium" variant="primary" modifier="outline" loading={loading}>
                    Confirm
                </Button>
                <Button onClick={onClose} size="medium" variant="destructive" modifier="outline" disabled={loading}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};
