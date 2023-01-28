import { VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';
import { labelClasses } from '../classes/labelClasses';

interface LabelProps extends VariantProps<typeof labelClasses> {
    id?: string;
    content?: string | JSX.Element;
    children: React.ReactNode;
}

export const Label = ({ content, children }: LabelProps) => {
    return (
        <>
            {content ? <label className={classNames(labelClasses())}>{content}</label> : <></>}
            {children}
        </>
    );
};
