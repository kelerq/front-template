import React from 'react';
import { ColDef } from 'ag-grid-community';
import { User } from 'core/domainModels/users/user';
import { fieldName } from 'core/helpers/aggrid';
import { Button } from 'app/components/Button';
import { ActiveIcon, EditIcon, LockIcon, MinusIcon, NonActiveIcon, PlusIcon, UserIcon } from 'assets/icons/icons';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';
import { Permission } from 'core/domainModels/users/permission';
import { UserPermission } from 'core/domainModels/users/userPermission';

export const permissionsTableColumnsDefs: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    sortingOrder: ['asc', 'desc'],
    flex: 1,
};

export const permissionsTableColumns = (
    deleteUserPermissionAction: (id: string) => void,
    addUserPermissionAction: (id: string) => void,
): Array<ColDef> => {
    const columns: Array<ColDef> = [
        {
            colId: fieldName<UserPermission>('title'),
            field: fieldName<UserPermission>('title'),
            headerName: 'Title',
        },

        {
            colId: fieldName<UserPermission>('isActivated'),
            field: fieldName<UserPermission>('isActivated'),
            headerName: 'Active',
            cellRenderer: params => {
                return (
                    <div className="flex flex-row items-center justify-between h-full">
                        <span className="absolute block w-4 h-4 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                            {params.value ? <ActiveIcon /> : <NonActiveIcon />}
                        </span>
                    </div>
                );
            },
        },
        {
            headerName: 'Actions',
            field: 'actions',
            cellRenderer: params => {
                return (
                    <div className="flex flex-row justify-center items-center h-full [&_Button]:mr-2">
                        <Button icon={<PlusIcon />} onClick={() => {}} disabled={!params.value}>
                            {}
                        </Button>
                        <Button
                            icon={<MinusIcon />}
                            onClick={() => {
                                deleteUserPermissionAction(params.data.id);
                            }}
                            disabled={params.value}
                        >
                            {}
                        </Button>
                    </div>
                );
            },
        },
    ];

    return columns;
};
