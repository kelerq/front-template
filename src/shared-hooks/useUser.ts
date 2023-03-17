import { getPermissions } from 'core/api/endpoints/permissions/permissions';
import { getUserDetails, getUserPermissions } from 'core/api/endpoints/users/users';
import { Permission } from 'core/domainModels/users/permission';
import { User } from 'core/domainModels/users/user';
import { UserPermission } from 'core/domainModels/users/userPermission';
import { useEffect, useState } from 'react';

export const useUser = (id: string) => {
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const [userPermissions, setUserPermissions] = useState<Array<UserPermission>>();
    const [permissions, setPermissions] = useState<Array<Permission>>();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const [permissionsData, userDetails] = await Promise.all([getPermissions(), getUserDetails(id)]);

                setUser({ ...userDetails, id } as User);
                setPermissions(permissionsData as Array<Permission>);

                const userPermissionsData = await getUserPermissions(id, permissionsData as Array<Permission>);
                setUserPermissions(userPermissionsData as Array<UserPermission>);
            } catch (err) {
                setError(err as string);
            }
            setIsLoading(false);
        };
        fetchData();
    }, [id]);

    return { user, userPermissions, isLoading, error, permissions };
};
