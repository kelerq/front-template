import classNames from 'classnames';
import React from 'react';
import { Button } from '..';

interface ButtonAndroidProps {
    children: React.ReactNode;
    className?: string;
    hoverClassName?: string;
    activeClassName?: string;
    onClick?: (event: React.MouseEvent) => void;
    disabled?: boolean;
}

export const ButtonAndroid = (props: ButtonAndroidProps) => {
    return (
        <Button
            {...props}
            className={classNames(props.className, 'bg-white text-black border border-gray-300')}
            onClick={() => {}}
        />
    );
};
