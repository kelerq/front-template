import React from 'react';
import { CrossCircledIcon } from 'assets/icons/icons';
import Button from 'shared-ui/atoms/Button';

interface ErrorMessageProps {
    navigate: (path: string) => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ navigate }) => (
    <div className="flex flex-col items-center justify-center p-4">
        <CrossCircledIcon className="w-[25rem] h-[25rem] fill-error mr-2" />
        <h1 className="text-4xl text-center">
            Aktywacja nowego adresu e-mail przebiegła niepomyślnie. Czas na aktywacje minął lub link aktywacyjny jest
            nieprawidłowy.
        </h1>
        <div className="flex w-full">
            <Button variant="secondary" size="large" modifier="outline" onClick={() => navigate('/')} className="w-full m-6">
                Strona główna
            </Button>
            <Button
                variant="secondary"
                size="large"
                modifier="outline"
                onClick={() => navigate('/im/settings/account')}
                className="w-full m-6"
            >
                Moje dane
            </Button>
        </div>
    </div>
);
