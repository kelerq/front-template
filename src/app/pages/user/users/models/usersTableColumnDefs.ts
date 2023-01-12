import { ColDef } from 'ag-grid-community';
import { User } from 'core/domainModels/authorization/user';
import { fieldName } from 'core/helpers/aggrid';

export const usersTableColumnsDefs: ColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    sortingOrder: ['asc', 'desc'],
    flex: 1,
    minWidth: 90,
};

export const usersTableColumns = (): Array<ColDef> => {
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
            headerName: 'Is active',
        },
    ];

    return columns;
};
