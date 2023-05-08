import { User } from 'core/domainModels/users/user';
import { ToastHandle } from 'shared-ui/atoms/Toast/toastTypes';
import { useMutation } from 'react-query';
import config from 'config';

async function updatePassword({
    userId,
    plainPassword,
    repeatPlainPassword,
}: {
    userId: string;
    plainPassword: string;
    repeatPlainPassword: string;
}) {
    const response = await fetch(`${config.importercalcAPI.url}/api/users/${userId}/change-password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plainPassword, repeatPlainPassword }),
    });

    if (!response.ok) {
        throw new Error('Failed to update user email');
    }

    return true;
}

export const useSubmitPasswordChange = (toastRefs: {
    successToastRef: React.MutableRefObject<ToastHandle | null>;
    failedToastRef: React.MutableRefObject<ToastHandle | null>;
}) => {
    const { successToastRef, failedToastRef } = toastRefs;

    const updateAuthenticatedUserPasswordMutation = useMutation(
        (data: {
            user: User | undefined;
            changes: {
                plainPassword: string;
                repeatPlainPassword: string;
            };
            onFailed: { message: string };
            onSuccess: {
                message: string;
            };
        }) => {
            if (!data.user) {
                throw new Error('User not found');
            }

            return updatePassword({
                userId: data.user.id,
                plainPassword: data.changes.plainPassword,
                repeatPlainPassword: data.changes.repeatPlainPassword,
            });
        },
        {
            onSuccess: (response, variables, context) => {
                successToastRef.current?.setupToast(variables.onSuccess.message);
            },
            onError: (error, variables, context) => {
                failedToastRef.current?.setupToast(variables.onFailed.message);
            },
        },
    );

    return { updateAuthenticatedUserPasswordMutation, loading: updateAuthenticatedUserPasswordMutation.isLoading };
};
