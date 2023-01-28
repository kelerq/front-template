import { UserPermission } from 'core/domainModels/users/userPermission';

export const mapApiModelToUserPermission = (apiModel, userId: string, isActivated: boolean): UserPermission => {
    return {
        id: apiModel.id,
        title: apiModel.title,
        slug: apiModel.slug,
        userId: userId,
        isActivated: isActivated,
    };
};
