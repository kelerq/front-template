import { User } from 'core/domainModels/users/user';
import { ToastHandle } from 'shared-ui/atoms/Toast/toastTypes';
import { useMutation } from 'react-query';
import config from 'config';

async function updateEmail({ userId, email }: { userId: string; email: string }) {
    const response = await fetch(`${config.importercalcAPI.url}/api/users/${userId}/change-email`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
    });

    if (!response.ok) {
        throw new Error('Failed to update user email');
    }

    return true;
}

export const useSubmitEmailChange = (toastRefs: {
    successToastRef: React.MutableRefObject<ToastHandle | null>;
    failedToastRef: React.MutableRefObject<ToastHandle | null>;
}) => {
    const { successToastRef, failedToastRef } = toastRefs;

    const updateAuthenticatedUserEmailMutation = useMutation(
        (data: {
            user: User | undefined;
            email: string;
            onFailed: { message: string };
            onSuccess: {
                message: string;
            };
        }) => {
            if (!data.user) {
                throw new Error('User not found');
            }

            return updateEmail({ userId: data.user.id, email: data.email });
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

    return { updateAuthenticatedUserEmailMutation, loading: updateAuthenticatedUserEmailMutation.isLoading };
};
