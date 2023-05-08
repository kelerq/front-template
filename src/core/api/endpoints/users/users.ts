import config from 'config';
import { Permission } from 'core/domainModels/users/permission';
import { User } from 'core/domainModels/users/user';
import { UserPermission } from 'core/domainModels/users/userPermission';
import { axiosInstance as axios } from '../../axios/axiosInstance';
import { mapApiModelToUserPermission } from './mappings/mapApiModelToUserPermission';
import { mapApiModelToUser } from './mappings/mapApiModelToUser';
import { UserApiModel } from './models/userApiModel';

export const usersEndpointURL = `${config.importercalcAPI.url}/api/users`;

export const getUserPermissions = async (userId: string, permissions: Array<Permission>): Promise<Array<UserPermission>> => {
    const endpoint = `${usersEndpointURL}/${userId}/permissions`;
    try {
        const response = await axios.get(endpoint);
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
    } catch (err) {
        throw Error('Error while fetching user permissions');
    }
};

export const deleteUserPermission = async (userId: string, permissionId: string): Promise<void> => {
    const endpoint = `${usersEndpointURL}/${userId}/permissions/${permissionId}`;
    try {
        await axios.delete(endpoint);
    } catch (err) {
        throw Error('Error while deleting user permission');
    }
};

export const addUserPermission = async (userId: string, permissionId: string): Promise<void> => {
    const endpoint = `${usersEndpointURL}/${userId}/permissions`;
    try {
        await axios.post(endpoint, { permissionId: permissionId });
    } catch (err) {
        throw Error('error while adding user permission');
    }
};

export const getUserDetails = async (userId: string): Promise<User> => {
    const endpoint = `${usersEndpointURL}/${userId}/details`;
    try {
        const response = await axios.get(endpoint);
        const user = mapApiModelToUser(response.data.data as UserApiModel);
        if (!user) {
            throw new Error('empty response');
        }
        return user as User;
    } catch (err) {
        throw Error('Error while fetching user details');
    }
};

export const getUsers = async (url: string): Promise<Array<User>> => {
    try {
        const response = await axios.get(url);
        const users = response.data.data.map((user: UserApiModel) => mapApiModelToUser(user));
        if (!users) {
            throw new Error('empty response');
        }
        console.log('MAPPED', users);
        return users as Array<User>;
    } catch (err) {
        throw Error('Error while fetching users');
    }
};

export const updateUser = async (
    changes: {
        firstName: string;
        lastName: string;
    },
    userId: string,
): Promise<Partial<User>> => {
    const endpoint = `${usersEndpointURL}/${userId}/account`;
    try {
        const response = await axios.put(endpoint, changes);
        if (!response) {
            throw new Error('empty response');
        }
        return changes as Partial<User>;
    } catch (err) {
        throw Error('Error while updating user');
    }
};

export const blockUser = async (userId: string, reason: string): Promise<Partial<User>> => {
    const endpoint = `${usersEndpointURL}/${userId}/block`;
    try {
        const response = await axios.put(endpoint, { reason: reason });
        if (!response) {
            throw new Error('empty response');
        }
        return response.data.data as Partial<User>;
    } catch (err) {
        throw Error('Error while blocking user');
    }
};

export const changeEmail = async (userId: string, email: string): Promise<string> => {
    const endpoint = `${usersEndpointURL}/${userId}/change-email`;
    try {
        const response = await axios.patch(endpoint, { email: email });
        if (!response) {
            throw new Error('empty response');
        }
        return email;
    } catch (err) {
        throw Error('Error while changing email');
    }
};

export const confirmEmail = async (email: string, token: string): Promise<any> => {
    const authActivationURL = `${usersEndpointURL}/confirm-new-email`;

    try {
        const response = await axios.patch(authActivationURL, {}, { params: { email: email, token: token } });
        if (!response) {
            throw new Error('empty response');
        }

        return email;
    } catch (err) {
        throw new Error('Error while confirming email');
    }
};

export const changePassword = async (
    userId: string,
    change: {
        plainPassword: string;
        repeatPlainPassword: string;
    },
): Promise<boolean> => {
    const endpoint = `${usersEndpointURL}/${userId}/change-password`;
    try {
        await axios.patch(endpoint, {
            plainPassword: change.plainPassword,
            repeatPlainPassword: change.repeatPlainPassword,
        });

        return true;
    } catch (err) {
        throw Error('Error while changing email');
    }
};
