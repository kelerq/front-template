import React from 'react';
import { ColDef } from 'ag-grid-community';
import { User } from 'core/domainModels/users/user';
import { fieldName } from 'core/helpers/aggrid';
import { Button } from 'app/components/Button';
import { ActiveIcon, EditIcon, LockIcon, NonActiveIcon, UserIcon } from 'assets/icons/icons';
import { Link, NavigateFunction, useNavigate } from 'react-router-dom';

export const usersTableColumnsDefs: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    sortingOrder: ['asc', 'desc'],
    flex: 1,
    minWidth: 90,
};

export const usersTableColumns = (blockUser: (id: string) => void, navigate: NavigateFunction): Array<ColDef> => {
    const columns: Array<ColDef> = [
        {
            colId: '0',
            headerName: '',
            field: 'selected',
            headerCheckboxSelection: true,
            headerCheckboxSelectionFilteredOnly: true,
            filterParams: {
                applyButton: true,
                resetButton: true,
            },
            checkboxSelection: true,
            filter: '',
        },
        {
            headerName: 'Index',
            valueGetter: 'node.rowIndex + 1',
        },
        {
            colId: fieldName<User>('firstName'),
            field: fieldName<User>('firstName'),
            headerName: 'First name',
        },
        {
            colId: fieldName<User>('lastName'),
            field: fieldName<User>('lastName'),
            headerName: 'Last name',
        },
        {
            colId: fieldName<User>('email'),
            field: fieldName<User>('email'),
            headerName: 'Email',
        },
        {
            colId: fieldName<User>('isActive'),
            field: fieldName<User>('isActive'),
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
                    <div className="flex flex-row items-center justify-between h-full">
                        <Button
                            icon={<UserIcon />}
                            onClick={() =>
                                navigate(`/im/settings/user/${params.data.id}/info`, {
                                    state: {
                                        userId: params.data.id,
                                    },
                                })
                            }
                        >
                            {}
                        </Button>
                        <Button
                            icon={<EditIcon />}
                            onClick={() =>
                                navigate(`/im/settings/user/${params.data.id}/edit`, {
                                    state: {
                                        userId: params.data.id,
                                    },
                                })
                            }
                        >
                            {}
                        </Button>
                        <Button icon={<LockIcon />} onClick={() => blockUser(params.data.id)}>
                            {}
                        </Button>
                    </div>
                );
            },
        },
    ];

    return columns;
};
