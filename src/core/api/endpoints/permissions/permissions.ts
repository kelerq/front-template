import axios from 'axios';
import config from 'config';
import { Permission } from 'core/domainModels/users/permission';
import { mapApiModelToPermission } from './mappings/mapApiModelToPermission';

export const permissionsEndpointURL = `${config.importercalcAPI.url}/api/auth/permissions`;

export const getPermissions = (): Promise<Array<Permission>> => {
    return axios
        .get(permissionsEndpointURL)
        .then(response => {
            const permissions = response.data.data.map(permission => mapApiModelToPermission(permission));
            if (!permissions) {
                throw new Error('empty response');
            }
            return permissions as Array<Permission>;
        })
        .catch(err => {
            throw Error(err);
        });
};
