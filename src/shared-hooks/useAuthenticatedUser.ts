import config from 'config';
import { User } from 'core/domainModels/users/user';
import { useQuery } from '@tanstack/react-query';
import { fetchWithAccessToken } from 'core/helpers/fetchWithAccessToken';

async function fetchAuthenticatedUser() {
    const response = await fetchWithAccessToken(`${config.importercalcAPI.url}/api/users/me`, {
        method: 'GET',
    });
    if (!response.ok) {
        throw new Error('Failed to fetch authenticated user');
    }
    const jsonResponse = await response.json();
    return jsonResponse.data;
}

export const useAuthenticatedUser = () => {
    const { data, isLoading } = useQuery<User | undefined, Error>(['user'], fetchAuthenticatedUser);
    return { user: data, isLoading };
};
