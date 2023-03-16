import classNames from 'classnames';
import React from 'react';

export interface InputContainerProps {
    children: React.ReactNode;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    className?: string;
}

export const InputContainer = (props: InputContainerProps) => {
    return <div className={(classNames(props.className), 'flex flex-col items-start')}>{props.children}</div>;
};
