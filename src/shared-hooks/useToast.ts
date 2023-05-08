import { useState, useEffect, useRef, useCallback } from 'react';

interface UseToastResult {
    open: boolean;
    showToast: () => void;
    closeToast: () => void;
    title: string;
    setTitle: (title: string) => void;
    description: string;
    setDescription: (description: string) => void;
}

interface UseToastOptions {
    duration?: number;
    onOpenChange?: (open: boolean) => void;
}

export const useToast = ({ duration = 5000, onOpenChange }: UseToastOptions = {}): UseToastResult => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);

    const showToast = useCallback(() => {
        setOpen(false);
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = window.setTimeout(() => {
            setOpen(true);
            if (onOpenChange) {
                onOpenChange(true);
            }
            timerRef.current = window.setTimeout(() => {
                setOpen(false);
                if (onOpenChange) {
                    onOpenChange(false);
                }
            }, duration);
        }, 100);
    }, [duration, onOpenChange]);

    const closeToast = useCallback(() => {
        setOpen(false);
        if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
        }
    }, []);

    return { open, showToast, closeToast, title, setTitle, description, setDescription };
};
