import { CheckCircledIcon } from 'assets/icons/icons';
import { User } from 'core/domainModels/users/user';
import { PatternTypes } from 'core/helpers/patternTypes';
import { useSubmitEmailChange } from 'modules/settings/hooks/useSubmitEmailChange';
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
    email: string;
};

export const EditEmailModal = ({ user }: EditNameModalProps) => {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState<string>('');
    const [emailChanged, setEmailChanged] = React.useState<boolean>(false);

    const successToastRef = React.useRef<ToastHandle | null>(null);
    const failedToastRef = React.useRef<ToastHandle | null>(null);
    const { updateAuthenticatedUserEmailMutation: submitEmailChange, loading } = useSubmitEmailChange({
        successToastRef,
        failedToastRef,
    });

    const handleSubmit = async ({ email }: FormValues) => {
        try {
            await submitEmailChange.mutateAsync({
                user,
                email,
                onSuccess: { message: 'Twój email został pomyślnie zmieniony, zweryfikuj zmianę potwierdzając email.' },
                onFailed: { message: 'Wystąpił błąd. Spróbuj ponownie.' },
            });
            setOpen(false);
            setEmailChanged(true);
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
                        <span className="text-4xl text-black">Edytuj email</span>
                    </div>
                    <FormRoot className="w-full px-8" onSubmit={handleSubmit}>
                        <FormField className="grid mb-[1rem]" name="email">
                            <div className="flex items-baseline justify-between">
                                <FormLabel className="my-1 text-2xl font-light text-base-400">Email</FormLabel>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="valueMissing">
                                    Wprowadź email
                                </FormMessage>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="patternMismatch">
                                    Wprowadź poprawne email
                                </FormMessage>
                            </div>
                            <FormControl asChild>
                                <TextInput
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    dimensions="large"
                                    placeholder={user?.email}
                                    className="text-2xl"
                                    required
                                    pattern={PatternTypes.EmailRegex}
                                    disabled={loading}
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
            <Dialog open={emailChanged} onOpenChange={setEmailChanged}>
                <DialogContent>
                    <div className="flex flex-col items-center justify-center w-full h-full py-4">
                        <CheckCircledIcon className="w-[10rem] h-[10rem] fill-success" />
                        <span className="p-4 text-3xl text-center text-black">
                            Email zostanie zmieniony po aktywacji. Aktywuj nowy adres w wiadomości, którą otrzymałeś na podany
                            adres.
                        </span>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};
