import { Permission } from 'core/domainModels/users/permission';
import { PermissionApiModel } from '../models/PermissionApiModel';

export const mapApiModelToPermission = ({ id, title, slug, usersCount }: PermissionApiModel): Permission => ({
    id,
    title,
    slug,
    usersCount,
});
