import { User } from 'core/domainModels/authorization/user';

export const mapApiModelToUserInfo = (apiModel): User => {
    return {
        id: apiModel.id,
        email: apiModel.email,
        isActive: apiModel.active,
        firstName: apiModel.firstName,
        lastName: apiModel.lastName,
    };
};
