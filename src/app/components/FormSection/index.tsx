import classNames from 'classnames';
import React from 'react';
// interface FormSectionProps {
//     header?: string;
//     loading?: boolean;
//     className?: string;
//     formClassName?: string;
//     icon?: JSX.Element;
//     theme?: 'Card';
//     onRefresh?: () => void;
// }

interface FormSectionProps {
    children: React.ReactNode;
    onSubmit?: () => void;
    className?: string;
}
interface FormSectionElementProps {
    children: React.ReactNode;
    className?: string;
}
export const FormSectionHeader = ({ children, className }: FormSectionElementProps) => {
    return <h3 className={classNames(className, 'text-xl')}>{children}</h3>;
};

export function FormSection({ children, onSubmit, className }: FormSectionProps): JSX.Element {
    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    );
}

// <div className={'tachoformSectionHeader'}>
//     {props.header ? <Header /> : <></>}{' '}
//     {props.loading && <div className="loader">{/* <ClipLoader color="accent" type="Beat" size={5} /> */}</div>}
//     {props.icon}
// </div>
