import * as React from 'react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { buildServerSideDataUrl } from 'core/helpers/dataFetch';
import { blockUser, getUsers, usersEndpointURL } from 'core/api/endpoints/users/users';
import { GridApi } from 'ag-grid-enterprise';
import { ConfirmationModal } from 'shared-ui/molecules/ConfirmationModal';
import { TextInput } from 'shared-ui/molecules/TextInput';
import { useNavigate } from 'react-router-dom';
import { Container } from 'shared-ui/atoms/Container';
import { usersTableColumns, usersTableColumnsDefs } from './UsersTableColumnDefs';

export const UsersContainer = () => {
    const navigate = useNavigate();
    const [gridApi, setGridApi] = useState<GridApi>();
    const [blockUserModal, setblockUserModal] = useState({
        isOpen: false,
        id: '',
        reason: '',
    });
    const urlBuilder = buildServerSideDataUrl(`${usersEndpointURL}`);

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

    return (
        <Container className="flex flex-col h-full ag-theme-alpine-dark">
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
