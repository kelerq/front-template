import { UserPermission } from 'core/domainModels/users/userPermission';
import { UserPermissionApiModel } from '../models/UserPermissionApiModel';

export const mapApiModelToUserPermission = (
    { id, title, slug }: UserPermissionApiModel,
    userId: string,
    isActivated: boolean,
): UserPermission => ({
    id,
    title,
    slug,
    userId,
    isActivated,
});
