import React from 'react';
import { fieldName } from 'core/helpers/aggrid';
import { ColDef } from 'ag-grid-community';
import { PlusIcon } from 'assets/icons/icons';
import { Permission } from 'core/domainModels/users/permission';
import { Button } from 'shared-ui/atoms/Button';

export const permissionsTableColumnsDefs: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true,
    resizable: true,
    sortingOrder: ['asc', 'desc'],
    flex: 1,
};

export const permissionsTableColumns = (addUserPermissionAction: (id: string) => void): Array<ColDef> => {
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
            colId: fieldName<Permission>('title'),
            field: fieldName<Permission>('title'),
            headerName: 'Title',
            filter: 'agTextColumnFilter',
        },
        {
            headerName: 'Actions',
            field: 'actions',
            cellRenderer: params => {
                return (
                    <div className="flex flex-row justify-center items-center h-full [&_Button]:mr-2">
                        <Button
                            icon={<PlusIcon />}
                            onClick={() => {
                                addUserPermissionAction(params.data.id);
                            }}
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
