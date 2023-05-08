import React, { useState } from 'react';
import { ConfirmationModal } from 'shared-ui/molecules/ConfirmationModal';
import Button from 'shared-ui/atoms/Button';
import Container from 'shared-ui/atoms/Container';

export const ModalExamplesConatainer = () => {
    const [confirmationModal, setConfirmationModal] = useState({
        isOpen: false,
    });

    const closeModal = () => {
        setConfirmationModal({ isOpen: false });
    };
    const confirmModalQuestion = () => {
        closeModal();
    };

    const openModal = () => {
        setConfirmationModal({ isOpen: true });
    };

    return (
        <Container className="flex flex-row flex-wrap">
            <ConfirmationModal isOpen={confirmationModal.isOpen} onClose={closeModal} onConfirm={confirmModalQuestion}>
                Czy jesteś pewien, że chcesz opuścić formularz?
            </ConfirmationModal>
            <Button className="m-7" size="medium" onClick={openModal}>
                Open confirmation modal{' '}
            </Button>
        </Container>
    );
};
