import * as React from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { buildServerSideDataUrl } from 'core/helpers/dataFetch';
import { blockUser, getUsers, usersEndpointURL } from 'core/api/endpoints/users/users';
import { GridApi } from 'ag-grid-enterprise';
import { useNavigate } from 'react-router-dom';
import { usersTableColumns, usersTableColumnsDefs } from './UsersTableColumnDefs';
import Container from 'shared-ui/atoms/Container';

export const UsersContainer = () => {
    const navigate = useNavigate();
    const [gridApi, setGridApi] = useState<GridApi>();
    const [blockUserModal, setBlockUserModal] = useState({
        isOpen: false,
        id: '',
        reason: '',
    });
    const urlBuilder = buildServerSideDataUrl(`${usersEndpointURL}`);

    const blockUserAction = (id: string) => {
        setBlockUserModal({ isOpen: true, id, reason: '' });
    };

    const fetchUsers = params => {
        const { startRow, endRow, filterModel, sortModel } = params.request;
        urlBuilder.clear();
        urlBuilder.addPagination(startRow, endRow);
        urlBuilder.addSorting(sortModel);
        urlBuilder.addFiltering(filterModel);
        const url = urlBuilder.build();

        getUsers(url)
            .then(response => {
                params.successCallback(response, response.length);
            })
            .catch(error => {
                console.log(error);
                params.failCallback();
            });
    };

    const datasource = {
        getRows: fetchUsers,
    };

    const onGridReady = event => {
        setGridApi(event.api);
        event.api.setServerSideDatasource(datasource);
    };

    const closeModal = () => {
        setBlockUserModal({ isOpen: false, id: '', reason: '' });
    };

    const confirmBlockUser = () => {
        blockUser(blockUserModal.id, blockUserModal.reason).then(() => {
            gridApi?.refreshServerSide();
            closeModal();
        });
    };

    const onReasonChange = value => {
        setBlockUserModal({ ...blockUserModal, reason: value });
    };

    return (
        <>
            <Container className="flex flex-col h-full ag-theme-alpine-dark">
                {/* <ConfirmationModal isOpen={blockUserModal.isOpen} onClose={closeModal} onConfirm={confirmBlockUser}>
                    Are you sure you want to block this user?
                    <TextInput label="Reason" value={blockUserModal.reason} onChange={onReasonChange} />
                </ConfirmationModal> */}
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
        </>
    );
};
