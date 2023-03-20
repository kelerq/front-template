import React from 'react';
import { ClipLoader } from 'react-spinners';

interface LoadingOverlayProps {
    pending: boolean;
    message?: string;
    errorMessage?: string;
    color?: 'accent' | 'black' | 'white';
    size?: number;
}

const DEFAULT_SIZE = 25;
const DEFAULT_COLOR = 'white';

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
    pending,
    message,
    errorMessage,
    color = DEFAULT_COLOR,
    size = DEFAULT_SIZE,
}) => {
    if (!pending && !errorMessage) {
        return null;
    }

    const displayMessage = errorMessage || message || 'Loading...';

    return (
        <div className="z-50 flex flex-col items-center justify-center min-h-screen">
            <div className="text-center">
                <ClipLoader size={size} color={color} />
                <p className="mt-2">{displayMessage}</p>
            </div>
        </div>
    );
};

export default LoadingOverlay;
