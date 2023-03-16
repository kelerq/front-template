import { useCallback, useEffect, useState } from 'react';

const DOWN_ARROW = 40;
const UP_ARROW = 38;

export enum KeyAction {
    Up = 'up',
    Down = 'down',
}
export const DEFAULT_FOCUS_VALUE = -1;

export const useRoveFocus = (size: number, rovingEnabled = true, element: any) => {
    const [currentFocus, setCurrentFocus] = useState(DEFAULT_FOCUS_VALUE);

    const getRovingValue = (action: KeyAction) => {
        const value = action === KeyAction.Down ? 0 : size - 1;
        return rovingEnabled ? value : currentFocus;
    };

    const handleKeyDown = useCallback(
        e => {
            if (e.keyCode === DOWN_ARROW) {
                e.preventDefault();
                setCurrentFocus(currentFocus === size - 1 ? getRovingValue(KeyAction.Down) : currentFocus + 1);
            } else if (e.keyCode === UP_ARROW) {
                e.preventDefault();
                setCurrentFocus(currentFocus === 0 ? getRovingValue(KeyAction.Up) : currentFocus - 1);
            }
        },
        [size, currentFocus, setCurrentFocus],
    );

    useEffect(() => {
        element.current?.addEventListener('keydown', handleKeyDown, false);
        return () => {
            element.current?.removeEventListener('keydown', handleKeyDown, false);
        };
    }, [handleKeyDown]);

    return [currentFocus, setCurrentFocus] as const;
};
