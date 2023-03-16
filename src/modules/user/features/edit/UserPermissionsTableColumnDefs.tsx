import React from 'react';
import { ColDef } from 'ag-grid-community';
import { fieldName } from 'core/helpers/aggrid';
import { MinusIcon } from 'assets/icons/icons';
import { UserPermission } from 'core/domainModels/users/userPermission';
import { Button } from 'shared-ui/atoms/Button';

export const userPermissionsTableColumnsDefs: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    sortingOrder: ['asc', 'desc'],
    flex: 1,
};

export const userPermissionsTableColumns = (deleteUserPermissionAction: (id: string) => void): Array<ColDef> => {
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
            maxWidth: 50,
        },
        {
            colId: fieldName<UserPermission>('title'),
            field: fieldName<UserPermission>('title'),
            headerName: 'Title',
            filter: 'agTextColumnFilter',
        },
        {
            headerName: '',
            maxWidth: 50,
            field: 'actions',
            cellRenderer: params => {
                return (
                    <div className="flex flex-row justify-center items-center h-full [&_Button]:mr-2">
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
            filter: false,
        },
    ];

    return columns;
};
