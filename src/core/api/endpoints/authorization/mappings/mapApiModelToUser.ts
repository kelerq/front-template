import { User } from 'core/domainModels/users/user';
import { UserApiModel } from '../../users/models/UserApiModel';

export const mapApiModelToUserInfo = ({ id, email, active, firstName, lastName }: UserApiModel): User => ({
    id,
    email,
    isActive: active,
    firstName,
    lastName,
});
