// components/SuccessMessage.tsx
import React from 'react';
import { CheckCircledIcon } from 'assets/icons/icons';
import Button from 'shared-ui/atoms/Button';

interface SuccessMessageProps {
    navigate: (path: string) => void;
}

export const SuccessMessage: React.FC<SuccessMessageProps> = ({ navigate }) => (
    <div className="flex flex-col items-center justify-center p-4">
        <CheckCircledIcon className="w-[25rem] h-[25rem] fill-success mr-2" />
        <h1 className="text-4xl text-center">
            Aktywacja nowego adresu e-mail przebiegła pomyślnie. Możesz teraz korzystać z nowego adresu e-mail.
        </h1>
        <div className="flex w-full">
            <Button variant="default" size="large" modifier="outline" onClick={() => navigate('/')} className="w-full m-6">
                Strona główna
            </Button>
        </div>
    </div>
);
