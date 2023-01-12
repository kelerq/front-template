import React from 'react';
import { Spinner } from '@chakra-ui/spinner';

interface LoadingOverlayProps {
    pending: boolean;
    message?: string;
    errorMessage?: string;
    color?: 'accent' | 'black';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export function LoadingOverlay(props: LoadingOverlayProps): JSX.Element {
    return (
        <div className="z-50 flex flex-col h-screen justify-center">
            {props.pending ? (
                <div className="m-auto text-center">
                    <Spinner size={props.size || 'md'} color={props.color} />
                    <span>
                        <p>{props.message || 'Loading...'}</p>
                    </span>
                </div>
            ) : (
                <></>
            )}
            {props.errorMessage && (
                <div className="m-auto text-center">
                    <Spinner size={props.size || 'md'} color={props.color} />
                    <span>
                        <p>{props.errorMessage}</p>
                    </span>
                </div>
            )}
        </div>
    );
}
