import config from 'config';
import { Permission } from 'core/domainModels/users/permission';
import { User } from 'core/domainModels/users/user';
import { UserPermission } from 'core/domainModels/users/userPermission';
import { axiosInstance as axios } from '../../axios/axiosInstance';
import { mapApiModelToUserInfo } from '../authorization/mappings/mapApiModelToUser';
import { mapApiModelToUserPermission } from './mappings/mapApiModelToUserPermission';
import { mapApiModelToUser } from './mappings/mapApiModelToUserDetails';

export const usersEndpointURL = `${config.importercalcAPI.url}/api/users`;

export const getUserPermissions = (userId: string, permissions: Array<Permission>): Promise<Array<UserPermission>> => {
    const endpoint = `${usersEndpointURL}/${userId}/permissions`;
    return axios
        .get(endpoint)
        .then(response => {
            console.log('RESPONSE', response.data);
            const userPermissions = response.data.data.map(permission =>
                mapApiModelToUserPermission(
                    permission,
                    userId,
                    permissions.some(p => p.id === permission.id),
                ),
            );
            if (!userPermissions) {
                throw new Error('empty response');
            }
            return userPermissions as Array<UserPermission>;
        })
        .catch(err => {
            throw Error(err);
        });
};

export const deleteUserPermission = (userId: string, permissionId: string): Promise<void> => {
    const endpoint = `${usersEndpointURL}/${userId}/permissions/${permissionId}`;
    return axios
        .delete(endpoint)
        .then(() => {
            return;
        })
        .catch(err => {
            throw Error(err);
        });
};

export const addUserPermission = (userId: string, permissionId: string): Promise<void> => {
    const endpoint = `${usersEndpointURL}/${userId}/permissions`;
    return axios

        .post(endpoint, { permissionId: permissionId })
        .then(() => {
            return;
        })
        .catch(err => {
            throw Error(err);
        });
};

export const getUserDetails = (userId: string): Promise<User> => {
    const endpoint = `${usersEndpointURL}/${userId}/details`;
    return axios
        .get(endpoint)
        .then(response => {
            const user = mapApiModelToUser(response.data.data);
            if (!user) {
                throw new Error('empty response');
            }
            return user as User;
        })
        .catch(err => {
            throw Error(err);
        });
};

export const getUsers = (url: string): Promise<Array<User>> => {
    return axios
        .get(url)
        .then(response => {
            console.log('RESPONSE', response.data);
            const users = response.data.data.map(user => mapApiModelToUserInfo(user));
            if (!users) {
                throw new Error('empty response');
            }
            console.log('MAPPED', users);
            return users as Array<User>;
        })
        .catch(err => {
            throw Error(err);
        });
};

export const updateUser = (user: Partial<User>, userId: string): Promise<Partial<User>> => {
    const endpoint = `${usersEndpointURL}/${userId}/account`;
    return axios
        .put(endpoint, user)
        .then(response => {
            if (!response) {
                throw new Error('empty response');
            }
            return user as Partial<User>;
        })
        .catch(err => {
            throw Error(err);
        });
};

export const blockUser = (userId: string, reason: string): Promise<Partial<User>> => {
    const endpoint = `${usersEndpointURL}/${userId}/block`;
    return axios
        .put(endpoint, { reason: reason })
        .then(response => {
            if (!response) {
                throw new Error('empty response');
            }
            return response.data;
        })
        .catch(err => {
            throw Error(err);
        });
};
