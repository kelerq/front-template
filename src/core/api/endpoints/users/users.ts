import config from 'config';
import { UserDetails } from 'core/domainModels/users/userDetails';
import { axiosInstance as axios } from '../../axios/axiosInstance';
import { mapApiModelToUserDetails } from './mappings/mapApiModelToUserDetails';

export const getUserDetails = (userId: string): Promise<UserDetails> => {
    const endpoint = `${config.importercalcAPI.url}/users/${userId}/details`;
    return axios
        .get(endpoint)
        .then(response => {
            const user = response.data;
            if (!user) {
                throw new Error('empty response');
            }
            return user.map(user => mapApiModelToUserDetails(user));
        })
        .catch(err => {
            throw Error(err);
        });
};
