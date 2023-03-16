import { getPermissions } from 'core/api/endpoints/permissions/permissions';
import { Permission } from 'core/domainModels/users/permission';
import { useEffect, useState } from 'react';

export const usePermissions = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>();
    const [permissions, setPermissions] = useState<Array<Permission>>([]);

    useEffect(() => {
        const fetchPermissions = async () => {
            setIsLoading(true);
            try {
                const permissions = await getPermissions();
                setPermissions(permissions as Array<Permission>);
            } catch (err) {
                setError(err as string);
            }
            setIsLoading(false);
        };
        fetchPermissions();
    }, []);

    return { permissions, isLoading, error };
};
