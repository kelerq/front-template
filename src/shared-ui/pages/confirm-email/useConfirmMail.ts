import config from 'config';
import { fetchWithAccessToken } from 'core/helpers/fetchWithAccessToken';

import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';

async function confirmEmail({ email, token }: { email: string | null; token: string | null }) {
    const response = await fetchWithAccessToken(
        `${config.importercalcAPI.url}/api/users/confirm-new-email?` +
            new URLSearchParams({
                email: email || '',
                token: token || '',
            }),
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        },
    );

    if (!response.ok) {
        throw new Error('Failed to update user');
    }

    return true;
}

export const useConfirmEmail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const email = searchParams.get('email');
    const queryClient = useQueryClient();

    const confirmEmailMutation = useMutation(() => confirmEmail({ email, token }), {
        onSuccess: () => {
            queryClient.invalidateQueries(['user']);
        },
    });

    useEffect(() => {
        if (token && email) {
            confirmEmailMutation.mutate();
        }
    }, [token, email]);

    return {
        loading: confirmEmailMutation.isLoading,
        success: confirmEmailMutation.isSuccess,
        error: confirmEmailMutation.isError,
        navigate,
    };
};
