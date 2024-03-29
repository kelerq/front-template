import { User } from 'core/domainModels/users/user';
import { UserApiModel } from '../models/usersApiModel';

export const mapApiModelToUser = ({ id, email, active, firstName, lastName }: UserApiModel): User => ({
    id,
    email,
    isActive: active,
    firstName,
    lastName,
});
