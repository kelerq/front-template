import * as React from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { Container } from 'app/components/Container';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { buildServerSideDataUrl } from 'core/helpers/dataFetch';
import { blockUser, getUsers, usersEndpointURL } from 'core/api/endpoints/users/users';
import { GridApi } from 'ag-grid-enterprise';
import { usersTableColumnsDefs, usersTableColumns } from './models/usersTableColumnDefs';
import { Modal } from 'app/components/Modal';
import { ConfirmationModal } from 'app/components/ConfirmationModal';
import { CheckboxList } from 'app/components/inputs/CheckboxList';
import { Checkbox } from 'app/components/inputs/Checkbox';
import { MultiSelectList } from 'app/components/inputs/MultiSelectList';
import { Item } from 'app/components/inputs/interfaces/Item';
import { TextInput } from 'app/components/inputs/TextInput';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { DispatchType } from 'state/configureStore';

export const UsersContainer = () => {
    const dispatch = useDispatch<DispatchType>();
    const navigate = useNavigate();
    const [gridApi, setGridApi] = useState<GridApi>();
    const [blockUserModal, setblockUserModal] = useState({
        isOpen: false,
        id: '',
        reason: '',
    });
    const [checkedIds, setCheckedIds] = useState<Array<string>>([]);
    const urlBuilder = buildServerSideDataUrl(`${usersEndpointURL}`);

    const mapChecked = (driverGroupsIds: Array<string>, driverGroups: Array<any>): Array<Item> => {
        return driverGroups.map(d => ({
            id: d.id,
            label: d.name,
            checked: driverGroupsIds?.includes(d.id),
        }));
    };

    const blockUserAction = (id: string) => {
        setblockUserModal({ isOpen: true, id, reason: '' });
    };
    const datasource = {
        getRows(params) {
            console.log('GET ROWS? ');
            const { startRow, endRow, filterModel, sortModel } = params.request;
            urlBuilder.clear();
            console.log('startRow: ', startRow, 'endRow: ', endRow);
            urlBuilder.addPagination(startRow, endRow);
            urlBuilder.addSorting(sortModel);
            urlBuilder.addFiltering(filterModel);
            const url = urlBuilder.build();
            console.log(url);
            getUsers(url)
                .then(response => {
                    params.successCallback(response, response.length);
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                    params.failCallback();
                });
        },
    };

    const onGridReady = event => {
        setGridApi(event.api);

        event.api.setServerSideDatasource(datasource);
    };

    let checkboxSeed = [
        {
            id: '1',
            label: 'test',
        },
        {
            id: '2',
            label: 'test2',
        },
        {
            id: '3',
            label: 'test3',
        },
    ];

    return (
        <Container className="flex flex-col h-full ag-theme-alpine-dark">
            {/* <MultiSelectList
                value={mapChecked(checkedIds, checkboxSeed)}
                label="Driver groups"
                selectAllText="Select all"
                onChange={selectedItems => {
                    setCheckedIds(selectedItems.filter(item => item.checked).map(item => item.id));
                }}
            /> */}
            <ConfirmationModal
                isOpen={blockUserModal.isOpen}
                onClose={() => {
                    setblockUserModal({ isOpen: false, id: '', reason: '' });
                }}
                onConfirm={() => {
                    blockUser(blockUserModal.id, blockUserModal.reason).then(() => {
                        gridApi?.refreshServerSide();
                        setblockUserModal({ isOpen: false, id: '', reason: '' });
                    });
                }}
                title="Block user"
            >
                Are you sure you want to block this user?
                <TextInput
                    label="Reason"
                    value={blockUserModal.reason}
                    onChange={value => setblockUserModal({ ...blockUserModal, reason: value })}
                />
            </ConfirmationModal>
            <AgGridReact
                className="mt-4"
                rowModelType="serverSide"
                domLayout="autoHeight"
                onGridReady={onGridReady}
                defaultColDef={usersTableColumnsDefs}
                columnDefs={usersTableColumns(blockUserAction, navigate)}
                suppressLoadingOverlay
                pagination
                paginationPageSize={10}
                cacheBlockSize={10}
                maxBlocksInCache={10}
                serverSideStoreType="partial"
            />
        </Container>
    );
};
