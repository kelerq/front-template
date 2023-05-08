import { User } from 'core/domainModels/users/user';
import { ToastHandle } from 'shared-ui/atoms/Toast/toastTypes';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import config from 'config';

async function updateAccount({
    userId,
    changes,
}: {
    userId: string;
    changes: {
        firstName: string;
        lastName: string;
    };
}) {
    const response = await fetch(`${config.importercalcAPI.url}/api/users/${userId}/account`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(changes),
    });

    if (!response.ok) {
        throw new Error('Failed to update user');
    }

    return true;
}

export const useSubmitAccountChanges = (toastRefs: {
    successToastRef: React.MutableRefObject<ToastHandle | null>;
    failedToastRef: React.MutableRefObject<ToastHandle | null>;
}) => {
    const { successToastRef, failedToastRef } = toastRefs;
    const queryClient = useQueryClient();

    const updateAuthenticatedUserMutation = useMutation(
        (data: {
            user: User | undefined;
            changes: { firstName: string; lastName: string };
            onFailed: { message: string };
            onSuccess: {
                message: string;
            };
        }) => {
            if (!data.user) {
                throw new Error('User not found');
            }

            return updateAccount({ userId: data.user.id, changes: data.changes });
        },
        {
            onSuccess: (response, variables, context) => {
                successToastRef.current?.setupToast(variables.onSuccess.message);
            },
            onError: (error, variables, context) => {
                failedToastRef.current?.setupToast(variables.onFailed.message);
            },
            onSettled: () => {
                queryClient.invalidateQueries(['user']);
            },
        },
    );

    return { updateAuthenticatedUserMutation, loading: updateAuthenticatedUserMutation.isLoading };
};
