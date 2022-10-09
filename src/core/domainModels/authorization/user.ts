import { User as APIUser } from 'tacho-models';

export interface User {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    isAdmin: boolean;
    fullName: string;
}

const apiUserDefaults = new APIUser();
export const defaultUser: User = {
    id: '',
    firstName: apiUserDefaults.firstName,
    lastName: apiUserDefaults.lastName,
    username: apiUserDefaults.username,
    isAdmin: apiUserDefaults.isAdmin,
    fullName: `${apiUserDefaults.lastName} ${apiUserDefaults.firstName}`,
};
