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
    const [permissions, setPermissions] = useState<Array<UserPermission>>();

    useEffect(() => {
        const fetchPermissions = async () => {
            setIsLoading(true);
            try {
                const permissions = await getPermissions();
                const userPermissions = await getUserPermissions(id, permissions as Array<Permission>);
                setPermissions(userPermissions as Array<UserPermission>);
            } catch (err) {
                setError(err as string);
            }
            setIsLoading(false);
        };
        fetchPermissions();
    }, [id]);

    useEffect(() => {
        const fetchUser = async () => {
            setIsLoading(true);
            try {
                const user = await getUserDetails(id);
                setUser(user as User);
            } catch (err) {
                setError(err as string);
            }
            setIsLoading(false);
        };
        fetchUser();
    }, [id]);

    return { user, permissions, isLoading, error };
};
