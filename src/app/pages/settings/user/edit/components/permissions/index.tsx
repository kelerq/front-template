import { GridReadyEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';
import { Col } from 'app/components/Col';
import { ConfirmationModal } from 'app/components/ConfirmationModal';
import { Container } from 'app/components/Container';
import { User } from 'core/domainModels/users/user';
import { UserPermission } from 'core/domainModels/users/userPermission';
import React, { useCallback, useState } from 'react';
import { permissionsTableColumns, permissionsTableColumnsDefs } from './models/permissionsTableColumnDefs';

interface PermissionsComponentProps {
    user: User;
    permissions: Array<UserPermission>;
}

export const PermissionsComponent = ({ user, permissions }: PermissionsComponentProps): JSX.Element => {
    const [deleteUserPermissionModal, setDeleteUserPermissionModal] = useState({
        isOpen: false,
        permissionId: '',
    });
    const [addUserPermissionModal, setAddUserPermissionModal] = useState({
        isOpen: false,
        permissionId: '',
    });
    const deleteUserPermissionAction = (id: string) => {
        setDeleteUserPermissionModal({ isOpen: true, permissionId: id });
    };
    const addUserPermissionAction = (id: string) => {
        setAddUserPermissionModal({ isOpen: true, permissionId: id });
    };

    const handleGridReady = useCallback(
        (params: GridReadyEvent) => {
            params.api.setRowData(permissions);
        },
        [permissions],
    );

    return (
        <Container className="ag-theme-alpine-dark">
            <ConfirmationModal
                isOpen={deleteUserPermissionModal.isOpen}
                onClose={() => {
                    setDeleteUserPermissionModal({ isOpen: false, permissionId: '' });
                }}
                onConfirm={() => {
                    //deleteUserPermission();
                }}
                title="Remove user permission"
            >
                Are you sure you want to block this user?
            </ConfirmationModal>
            <ConfirmationModal
                isOpen={deleteUserPermissionModal.isOpen}
                onClose={() => {
                    setDeleteUserPermissionModal({ isOpen: false, permissionId: '' });
                }}
                onConfirm={() => {
                    //deleteUserPermission();
                }}
                title="Remove user permission"
            >
                Are you sure you want to block this user?
            </ConfirmationModal>
            <Col>
                <AgGridReact
                    domLayout="autoHeight"
                    rowData={permissions}
                    defaultColDef={permissionsTableColumnsDefs}
                    columnDefs={permissionsTableColumns(deleteUserPermissionAction, addUserPermissionAction)}
                    onGridReady={handleGridReady}
                />
            </Col>
        </Container>
    );
};
