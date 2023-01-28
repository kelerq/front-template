import { Permission } from 'core/domainModels/users/permission';

export const mapApiModelToPermission = (apiModel): Permission => {
    return {
        id: apiModel.id,
        title: apiModel.title,
        slug: apiModel.slug,
        usersCount: apiModel.usersCount,
    };
};
