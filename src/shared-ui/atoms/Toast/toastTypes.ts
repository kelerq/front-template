export interface ToastHandle {
    setupToast: (title?: string, description?: string) => void;
    showToast: () => void;
    closeToast: () => void;
}
