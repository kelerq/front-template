import axios from 'axios';
import config from 'config';
import { Permission } from 'core/domainModels/users/permission';
import { mapApiModelToPermission } from './mappings/mapApiModelToPermission';

export const permissionsEndpointURL = `${config.importercalcAPI.url}/api/auth/permissions`;

export const getPermissions = async (): Promise<Array<Permission>> => {
    try {
        const response = await axios.get(permissionsEndpointURL);
        const permissions = response.data.data.map(permission => mapApiModelToPermission(permission));

        if (!permissions) {
            throw new Error('empty response');
        }

        return permissions as Array<Permission>;
    } catch (err) {
        throw Error('Error while fetching permissions');
    }
};
