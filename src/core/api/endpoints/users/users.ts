import config from 'config';
import { Permission } from 'core/domainModels/users/permission';
import { User } from 'core/domainModels/users/user';
import { UserPermission } from 'core/domainModels/users/userPermission';
import { axiosInstance as axios } from '../../axios/axiosInstance';
import { mapApiModelToUserInfo } from '../authorization/mappings/mapApiModelToUser';
import { mapApiModelToUserPermission } from './mappings/mapApiModelToUserPermission';
import { mapApiModelToUser } from './mappings/mapApiModelToUserDetails';
import { UserApiModel } from './models/UserApiModel';

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
        const users = response.data.data.map((user: UserApiModel) => mapApiModelToUserInfo(user));
        if (!users) {
            throw new Error('empty response');
        }
        console.log('MAPPED', users);
        return users as Array<User>;
    } catch (err) {
        throw Error('Error while fetching users');
    }
};

export const updateUser = async (user: Partial<User>, userId: string): Promise<Partial<User>> => {
    const endpoint = `${usersEndpointURL}/${userId}/account`;
    try {
        const response = await axios.put(endpoint, user);
        if (!response) {
            throw new Error('empty response');
        }
        return user as Partial<User>;
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
