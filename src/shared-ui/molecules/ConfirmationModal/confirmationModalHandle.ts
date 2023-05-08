export interface ConfirmationModalHandle {
    setupConfirmationModal: (onSubmit: () => Promise<void>, title?: string, description?: string) => void;
    showConfirmationModal: () => void;
    closeConfirmationModal: () => void;
}
