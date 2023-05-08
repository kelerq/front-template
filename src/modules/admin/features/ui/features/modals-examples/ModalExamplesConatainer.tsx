import React from 'react';
import Button from 'shared-ui/atoms/Button';
import Container from 'shared-ui/atoms/Container';
import { ConfirmationModal } from 'shared-ui/molecules/ConfirmationModal';
import { ConfirmationModalHandle } from 'shared-ui/molecules/ConfirmationModal/confirmationModalHandle';

const wait = (): Promise<void> => new Promise(resolve => setTimeout(resolve, 2000));

export const ModalExamplesConatainer = () => {
    const confirmationModalRef = React.useRef<ConfirmationModalHandle>(null);

    return (
        <Container className="flex flex-row flex-wrap">
            <ConfirmationModal ref={confirmationModalRef} />
            <Button
                size="medium"
                onClick={() => {
                    confirmationModalRef.current?.setupConfirmationModal(wait, 'Czy jesteś pewien, że chcesz opuścić okno?');
                }}
            >
                Open confirmation modal{' '}
            </Button>
        </Container>
    );
};
