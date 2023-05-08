import React from 'react';
import { ClipLoader } from 'react-spinners';
import { SuccessMessage } from './SuccessMessage';
import { ErrorMessage } from './ErrorMessage';
import { useConfirmEmail } from './useConfirmMail';

export const ConfirmEmailPage = () => {
    const { loading, success, error, navigate } = useConfirmEmail();

    return (
        <div className="flex flex-col items-center justify-center h-[calc(100vh_-_var(--navigation-height))]">
            {loading && <ClipLoader size="5rem" />}
            {error && <ErrorMessage navigate={navigate} />}
            {success && <SuccessMessage navigate={navigate} />}
        </div>
    );
};
