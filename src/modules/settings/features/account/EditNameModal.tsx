import { User } from 'core/domainModels/users/user';
import { PatternTypes } from 'core/helpers/patternTypes';
import { useSubmitAccountChanges } from 'modules/settings/hooks/useSubmitAccountChanges';
import React from 'react';
import Button from 'shared-ui/atoms/Button';
import { Dialog } from 'shared-ui/atoms/Dialog/Dialog';
import { DialogContent } from 'shared-ui/atoms/Dialog/DialogContent';
import { DialogTrigger } from 'shared-ui/atoms/Dialog/DialogTrigger';
import FormControl from 'shared-ui/atoms/Form/FormControl';
import FormField from 'shared-ui/atoms/Form/FormField';
import FormLabel from 'shared-ui/atoms/Form/FormLabel';
import FormMessage from 'shared-ui/atoms/Form/FormMessage';
import FormRoot from 'shared-ui/atoms/Form/FormRoot';
import FormSubmit from 'shared-ui/atoms/Form/FormSubmit';
import { ToastHandle } from 'shared-ui/atoms/Toast/toastTypes';
import { FailedToast } from 'shared-ui/molecules/FailedToast';
import { SuccessToast } from 'shared-ui/molecules/SuccessToast';
import TextInput from 'shared-ui/molecules/TextInput';

interface EditNameModalProps {
    user: User | undefined;
}
type FormValues = {
    firstName: string;
    lastName: string;
};

export const EditNameModal = ({ user }: EditNameModalProps) => {
    const [open, setOpen] = React.useState(false);
    const [firstname, setFirstname] = React.useState<string>('');
    const [surname, setSurname] = React.useState<string>('');

    const successToastRef = React.useRef<ToastHandle | null>(null);
    const failedToastRef = React.useRef<ToastHandle | null>(null);
    const { updateAuthenticatedUserMutation: submitAccountChanges, loading } = useSubmitAccountChanges({
        successToastRef,
        failedToastRef,
    });

    const handleSubmit = async (changes: FormValues) => {
        try {
            await submitAccountChanges.mutateAsync({
                user,
                changes,
                onSuccess: { message: 'Twoje imię i nazwisko zostały pomyślnie zmienione.' },
                onFailed: { message: 'Wystąpił błąd. Spróbuj ponownie.' },
            });
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <SuccessToast ref={successToastRef} />
            <FailedToast ref={failedToastRef} />
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-500 focus:outline-none">
                    <Button variant="primary" size="large">
                        Edytuj
                    </Button>
                </DialogTrigger>
                <DialogContent>
                    <div className="flex flex-col items-center justify-center w-full h-full py-4">
                        <span className="text-4xl text-black">Edytuj imię i nazwisko</span>
                    </div>
                    <FormRoot className="w-full px-8" onSubmit={handleSubmit}>
                        <FormField className="grid mb-[1rem]" name="firstName">
                            <div className="flex items-baseline justify-between">
                                <FormLabel className="my-1 text-2xl font-light text-base-400">Imię</FormLabel>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="valueMissing">
                                    Wprowadź imię
                                </FormMessage>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="patternMismatch">
                                    Wprowadź poprawne imię
                                </FormMessage>
                            </div>
                            <FormControl asChild>
                                <TextInput
                                    value={firstname}
                                    onChange={e => setFirstname(e.target.value)}
                                    dimensions="large"
                                    placeholder={user?.firstName}
                                    className="text-2xl"
                                    required
                                    disabled={loading}
                                    pattern={PatternTypes.NameRegex}
                                />
                            </FormControl>
                        </FormField>
                        <FormField className="grid mb-[1rem]" name="lastName">
                            <div className="flex items-baseline justify-between">
                                <FormLabel className="my-1 text-2xl font-light text-base-400">Nazwisko</FormLabel>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="valueMissing">
                                    Wprowadź nazwisko
                                </FormMessage>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="patternMismatch">
                                    Wprowadź poprawne nazwisko
                                </FormMessage>
                            </div>
                            <FormControl asChild>
                                <TextInput
                                    value={surname}
                                    onChange={e => setSurname(e.target.value)}
                                    dimensions="large"
                                    placeholder={user?.lastName}
                                    disabled={loading}
                                    className="text-2xl"
                                    required
                                    pattern={PatternTypes.SurnameRegex}
                                />
                            </FormControl>
                        </FormField>
                        <FormSubmit asChild>
                            <div className="pt-6 pb-10">
                                <Button size="large" fullWidth variant="primary" loading={loading}>
                                    Zapisz
                                </Button>
                            </div>
                        </FormSubmit>
                    </FormRoot>
                </DialogContent>
            </Dialog>
        </>
    );
};
