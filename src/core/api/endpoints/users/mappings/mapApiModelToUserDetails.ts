import { UserDetails } from 'core/domainModels/users/userDetails';

export const mapApiModelToUserDetails = (apiModel): UserDetails => {
    return {
        email: apiModel.email,
        isActive: apiModel.active,
        firstName: apiModel.firstName,
        lastName: apiModel.lastName,
    };
};
