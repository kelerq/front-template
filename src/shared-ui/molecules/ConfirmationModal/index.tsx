import { ExclamationIcon } from 'assets/icons/icons';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import Button from 'shared-ui/atoms/Button';
import { Dialog } from 'shared-ui/atoms/Dialog/Dialog';
import { DialogContent } from 'shared-ui/atoms/Dialog/DialogContent';

interface ConfirmationModalProps {
    className?: string;
}

const useConfirmationModal = () => {
    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const submitRef = React.useRef<() => Promise<void>>(() => Promise.resolve());
    const [loading, setLoading] = useState(false);

    const setupConfirmationModal = (onSubmit: () => Promise<void>, description: string, title?: string) => {
        setDescription(description);
        setTitle(title || '');
        submitRef.current = onSubmit;
        setOpen(true);
    };

    const handleOpenChange = (isOpen: boolean) => {
        if (!isOpen) {
            setOpen(false);
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        await submitRef.current();
        setOpen(false);
        setLoading(false);
    };

    return {
        open,
        handleOpenChange,
        handleSubmit,
        title,
        description,
        loading,
        setupConfirmationModal,
    };
};

const ConfirmationDialogTitle: React.FC<{ title: string }> = ({ title }) => (
    <div className="flex flex-col items-center justify-center w-full h-full py-4">
        <ExclamationIcon className="w-[10rem] h-[10rem]" viewBox="0 0 100 100" />
        <span className="text-4xl text-black">{title}</span>
    </div>
);

const ConfirmationDialogDescription: React.FC<{ description: string }> = ({ description }) => (
    <div className="flex flex-col items-center justify-center w-full h-full py-4">
        <span className="text-4xl text-center">{description}</span>
    </div>
);

const ConfirmationDialogActions: React.FC<{ onSubmit: () => void; onCancel: () => void; loading: boolean }> = ({
    onSubmit,
    onCancel,
    loading,
}) => (
    <div className="flex flex-row justify-center px-12 py-4">
        <Button onClick={onSubmit} className="w-full" variant="primary" loading={loading} size="large">
            Potwierdź
        </Button>
        <Button onClick={onCancel} className="w-full ml-2" variant="accent" disabled={loading} size="large">
            Zamknij
        </Button>
    </div>
);

export const ConfirmationModal = forwardRef(({ className }: ConfirmationModalProps, ref) => {
    const { open, handleOpenChange, handleSubmit, title, description, loading, setupConfirmationModal } = useConfirmationModal();

    useImperativeHandle(ref, () => {
        return {
            setupConfirmationModal,
        };
    });

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogContent size="small">
                <ConfirmationDialogTitle title={title} />
                <ConfirmationDialogDescription description={description} />
                <ConfirmationDialogActions onSubmit={handleSubmit} onCancel={() => handleOpenChange(false)} loading={loading} />
            </DialogContent>
        </Dialog>
    );
});
