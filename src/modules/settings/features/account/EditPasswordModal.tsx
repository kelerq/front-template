import { InfoCircledIcon } from 'assets/icons/icons';
import { User } from 'core/domainModels/users/user';
import { PatternTypes, checkPattern } from 'core/helpers/patternTypes';
import { useSubmitPasswordChange } from 'modules/settings/hooks/useSubmitPasswordChange';
import React from 'react';
import { useForm } from 'shared-hooks/useForm';
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
import { Tooltip } from 'shared-ui/atoms/Tooltip/Tooltip';
import { TooltipContent } from 'shared-ui/atoms/Tooltip/TooltipContent';
import { TooltipTrigger } from 'shared-ui/atoms/Tooltip/TooltipTrigger';
import { FailedToast } from 'shared-ui/molecules/FailedToast';
import { SuccessToast } from 'shared-ui/molecules/SuccessToast';
import TextInput from 'shared-ui/molecules/TextInput';

type FormValues = {
    plainPassword: string;
    repeatPlainPassword: string;
};

interface EditNameModalProps {
    user: User | undefined;
}

export const EditPasswordModal = ({ user }: EditNameModalProps) => {
    const [open, setOpen] = React.useState(false);
    const [values, onChange] = useForm({
        plainPassword: '',
        repeatPlainPassword: '',
    });

    const successToastRef = React.useRef<ToastHandle | null>(null);
    const failedToastRef = React.useRef<ToastHandle | null>(null);
    const { updateAuthenticatedUserPasswordMutation: submitPasswordChange, loading } = useSubmitPasswordChange({
        successToastRef,
        failedToastRef,
    });

    const handleSubmit = async (changes: FormValues) => {
        try {
            await submitPasswordChange.mutateAsync({
                user,
                changes,
                onSuccess: { message: 'Twoje hasło zostało pomyślnie zmienione.' },
                onFailed: { message: 'Wystąpił błąd. Spróbuj ponownie.' },
            });
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const PasswordRequirementsList = ({ password }) => (
        <ul>
            {!checkPattern(password, PatternTypes.MinimumEightCharactersRegex) && <li> - minimum 8 znaków</li>}
            {!checkPattern(password, PatternTypes.OneUpperCaseRegex) && <li> - minimum 1 wielką literę</li>}
            {!checkPattern(password, PatternTypes.OneLowerCaseRegex) && <li> - minimum 1 małą literę</li>}
            {!checkPattern(password, PatternTypes.OneNumberRegex) && <li> - minimum 1 cyfrę</li>}
            {!checkPattern(password, PatternTypes.OneSpecialCharacterRegex) && <li> - minimum 1 znak specjalny</li>}
        </ul>
    );

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
                <DialogContent size="medium">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <span className="text-4xl text-black">Edytuj hasło</span>
                    </div>
                    <FormRoot className="w-full px-8" onSubmit={handleSubmit}>
                        <FormField className="grid mb-[1rem]" name="plainPassword">
                            <div className="flex items-center justify-between">
                                <FormLabel className="my-1 text-2xl font-light text-base-400">Nowe hasło</FormLabel>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="valueMissing">
                                    Wprowadź hasło
                                </FormMessage>
                                <FormMessage
                                    className="flex items-center justify-center text-xl text-error"
                                    match={(value: string) => {
                                        return !checkPattern(value, PatternTypes.PasswordRegex);
                                    }}
                                >
                                    <span className="opacity-[0.8]">Wprowadź poprawne hasło</span>
                                    <Tooltip delayDuration={0}>
                                        <TooltipTrigger>
                                            <InfoCircledIcon className=" w-[2rem] h-[2rem] fill-error ml-1 opacity-[0.8]" />
                                        </TooltipTrigger>
                                        <TooltipContent className="text-xl">
                                            <span className="text-2xl font-bold">Hasło musi zawierać:</span>
                                            <PasswordRequirementsList password={values.plainPassword} />
                                        </TooltipContent>
                                    </Tooltip>
                                </FormMessage>
                            </div>
                            <FormControl asChild>
                                <TextInput
                                    type="password"
                                    dimensions="large"
                                    className="text-2xl"
                                    required
                                    value={values.plainPassword}
                                    onChange={onChange}
                                    disabled={loading}
                                />
                            </FormControl>
                        </FormField>
                        <FormField className="grid mb-[1rem]" name="repeatPlainPassword">
                            <div className="flex items-baseline justify-between">
                                <FormLabel className="my-1 text-2xl font-light text-base-400">Powtórz nowe hasło</FormLabel>
                                <FormMessage className="text-xl text-error opacity-[0.8]" match="valueMissing">
                                    Powtórz nowe hasło
                                </FormMessage>
                                <FormMessage className="text-xl text-error" match="patternMismatch">
                                    <span className="opacity-[0.8]">Hasła nie są takie same</span>
                                </FormMessage>
                            </div>
                            <FormControl asChild>
                                <TextInput
                                    type="password"
                                    dimensions="large"
                                    className="text-2xl"
                                    required
                                    pattern={values.plainPassword}
                                    value={values.repeatPlainPassword}
                                    onChange={onChange}
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
        </>
    );
};
