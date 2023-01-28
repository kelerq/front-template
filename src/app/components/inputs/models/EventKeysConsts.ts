import { KeyboardEvent } from 'react';

export const KEY_ENTER = 'Enter';
export const KEY_ARROW_DOWN = 'ArrowDown';
export const KEY_ARROW_UP = 'ArrowUp';
export const KEY_NUMPAD_ENTER = 'NumpadEnter';
export const KEY_CONTROL = 'Control';
export const KEY_TAB = 'Tab';
export const KEY_F2 = 'F2';
export const KEY_F3 = 'F3';
export const KEY_SPACE = 'Space';
export const KEY_BACKSPACE = 'Backspace';
export const isKeyAlphanumeric = (e: KeyboardEvent) => {
    return (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90);
};
