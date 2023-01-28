import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoadingOverlayProps {
    pending: boolean;
    message?: string;
    errorMessage?: string;
    color?: 'accent' | 'black';
    size?: number;
}

const DEFAULT_SIZE = 25;
const DEFAULT_COLOR = 'white';

export function LoadingOverlay(props: LoadingOverlayProps): JSX.Element {
    return (
        <div className="z-50 flex flex-col h-screen justify-center">
            {props.pending ? (
                <div className="m-auto text-center">
                    <ClipLoader size={props.size || DEFAULT_SIZE} color={props.color || DEFAULT_COLOR} />
                    <span>
                        <p>{props.message || 'Loading...'}</p>
                    </span>
                </div>
            ) : (
                <></>
            )}
            {props.errorMessage && (
                <div className="m-auto text-center">
                    <ClipLoader size={props.size || DEFAULT_SIZE} color={props.color || DEFAULT_COLOR} />
                    <span>
                        <p>{props.errorMessage}</p>
                    </span>
                </div>
            )}
        </div>
    );
}
