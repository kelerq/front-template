import { GridReadyEvent, SelectionChangedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

import { ConfirmationModal } from 'shared-ui/molecules/ConfirmationModal';
import { addUserPermission, deleteUserPermission } from 'core/api/endpoints/users/users';
import { Permission } from 'core/domainModels/users/permission';
import { User } from 'core/domainModels/users/user';
import { UserPermission } from 'core/domainModels/users/userPermission';
import React, { useCallback, useState } from 'react';

import { permissionsTableColumns, permissionsTableColumnsDefs } from './PermissionsTableColumnDefs';
import { userPermissionsTableColumnsDefs, userPermissionsTableColumns } from './UserPermissionsTableColumnDefs';
import Button from 'shared-ui/atoms/Button';
import Col from 'shared-ui/atoms/Col';
import Container from 'shared-ui/atoms/Container';
import Row from 'shared-ui/atoms/Row';
import TableToolbar from 'shared-ui/atoms/TableToolbar';
interface PermissionsComponentProps {
    user: User;
    userPermissions: Array<UserPermission>;
    permissions: Array<Permission>;
}

export const PermissionsComponent = ({ user, permissions, userPermissions }: PermissionsComponentProps): JSX.Element => {
    const [permissionsGridApi, setPermissionsGridApi] = useState<GridReadyEvent['api']>();
    const [selectedPermissionNodes, setSelectedPermissionNodes] = useState<Array<Permission>>([]);
    const [selectedUserPermissionNodes, setSelectedUserPermissionNodes] = useState<Array<UserPermission>>([]);
    const [userPermissionsGridApi, setUserPermissionsGridApi] = useState<GridReadyEvent['api']>();
    const [deleteUserPermissionModal, setDeleteUserPermissionModal] = useState({
        isOpen: false,
        permissionId: '',
        loading: false,
        bulk: false,
    });
    const [addUserPermissionModal, setAddUserPermissionModal] = useState({
        isOpen: false,
        permissionId: '',
        loading: false,
        bulk: false,
    });
    const closeModal = (modalStateSetter: React.Dispatch<React.SetStateAction<any>>) => {
        modalStateSetter({ isOpen: false, permissionId: '', loading: false, bulk: false });
    };

    const deleteUserPermissionAction = (id: string) => {
        setDeleteUserPermissionModal({ isOpen: true, permissionId: id, loading: false, bulk: false });
    };

    const addUserPermissionAction = (id: string) => {
        setAddUserPermissionModal({ isOpen: true, permissionId: id, loading: false, bulk: false });
    };

    const handleAction = async (action: () => Promise<void>, modalStateSetter: React.Dispatch<React.SetStateAction<any>>) => {
        modalStateSetter((prevState: any) => ({ ...prevState, loading: true }));
        await action();
        closeModal(modalStateSetter);
    };

    const submitAddUserPermission = async () => {
        await addUserPermission(user.id, addUserPermissionModal.permissionId).then(() => {
            userPermissionsGridApi?.applyTransactionAsync({
                add: [permissions.find(x => x.id === addUserPermissionModal.permissionId) as unknown as UserPermission],
            });
            permissionsGridApi?.applyTransactionAsync({
                remove: [permissions.find(x => x.id === addUserPermissionModal.permissionId) as unknown as Permission],
            });
        });
    };

    const bulkAddUserPermission = async () => {
        await Promise.all(
            selectedPermissionNodes?.map(async permission => {
                await addUserPermission(user.id, permission.id).then(() => {
                    userPermissionsGridApi?.applyTransactionAsync({
                        add: [permissions.find(x => x.id === permission.id) as unknown as UserPermission],
                    });
                    permissionsGridApi?.applyTransactionAsync({
                        remove: [permissions.find(x => x.id === permission.id) as unknown as Permission],
                    });
                });
            }) as Array<Promise<void>>,
        );
    };

    const submitDeleteUserPermission = async () => {
        await deleteUserPermission(user.id, deleteUserPermissionModal.permissionId).then(() => {
            userPermissionsGridApi?.applyTransactionAsync({
                remove: [permissions.find(x => x.id === deleteUserPermissionModal.permissionId) as unknown as UserPermission],
            });
            permissionsGridApi?.applyTransactionAsync({
                add: [permissions.find(x => x.id === deleteUserPermissionModal.permissionId) as unknown as Permission],
            });
        });
    };

    const bulkDeleteUserPermission = async () => {
        await Promise.all(
            selectedUserPermissionNodes?.map(async permission => {
                await deleteUserPermission(user.id, permission.id).then(() => {
                    userPermissionsGridApi?.applyTransactionAsync({
                        remove: [permissions.find(x => x.id === permission.id) as unknown as UserPermission],
                    });
                    permissionsGridApi?.applyTransactionAsync({
                        add: [permissions.find(x => x.id === permission.id) as unknown as Permission],
                    });
                });
            }) as Array<Promise<void>>,
        );
    };

    const permissionRowsSelectionChanged = (event: SelectionChangedEvent) => {
        const selectedNodes = event.api.getSelectedNodes().map(node => node.data as Permission);

        setSelectedPermissionNodes(selectedNodes);
    };

    const userPermissionRowsSelectionChanged = (event: SelectionChangedEvent) => {
        const selectedNodes = event.api.getSelectedNodes().map(node => node.data as UserPermission);

        setSelectedUserPermissionNodes(selectedNodes);
    };

    const handlePermissionsGridReady = useCallback(
        (params: GridReadyEvent) => {
            params.api.setRowData(permissions.filter(x => !userPermissions.find(y => y.id === x.id)));
            setPermissionsGridApi(params.api);
        },
        [permissions],
    );
    const handleUserPermissionsGridReady = useCallback(
        (params: GridReadyEvent) => {
            params.api.setRowData(userPermissions);
            setUserPermissionsGridApi(params.api);
        },
        [userPermissions],
    );

    return (
        <Container className="ag-theme-alpine-dark">
            <ConfirmationModal
                isOpen={deleteUserPermissionModal.isOpen}
                onClose={() => closeModal(setDeleteUserPermissionModal)}
                onConfirm={() =>
                    handleAction(
                        deleteUserPermissionModal.bulk ? bulkDeleteUserPermission : submitDeleteUserPermission,
                        setDeleteUserPermissionModal,
                    )
                }
                title="Remove user permission"
                loading={deleteUserPermissionModal.loading}
            >
                Are you sure you want to remove this permission?
            </ConfirmationModal>
            <ConfirmationModal
                isOpen={addUserPermissionModal.isOpen}
                onClose={() => closeModal(setAddUserPermissionModal)}
                onConfirm={() =>
                    handleAction(
                        addUserPermissionModal.bulk ? bulkAddUserPermission : submitAddUserPermission,
                        setAddUserPermissionModal,
                    )
                }
                title="Add user permission"
                loading={addUserPermissionModal.loading}
            >
                Are you sure you want to add this permission?
            </ConfirmationModal>
            <Row>
                <Col className="w-1/2">
                    <TableToolbar>
                        <Button
                            size="medium"
                            modifier="outline"
                            onClick={() => {
                                setAddUserPermissionModal({ isOpen: true, permissionId: '', loading: false, bulk: true });
                            }}
                            disabled={selectedPermissionNodes?.length === 0}
                        >
                            Add {selectedPermissionNodes?.length ? selectedPermissionNodes.length : ''}
                        </Button>
                    </TableToolbar>
                    <AgGridReact
                        domLayout="autoHeight"
                        onGridReady={handlePermissionsGridReady}
                        defaultColDef={permissionsTableColumnsDefs}
                        columnDefs={permissionsTableColumns(addUserPermissionAction)}
                        onSelectionChanged={permissionRowsSelectionChanged}
                        suppressLoadingOverlay
                    />
                </Col>
                <Col className="w-1/2">
                    <TableToolbar>
                        <Button
                            size="medium"
                            modifier="outline"
                            onClick={() => {
                                setDeleteUserPermissionModal({ isOpen: true, permissionId: '', loading: false, bulk: true });
                            }}
                            disabled={selectedUserPermissionNodes?.length === 0}
                        >
                            Remove {selectedUserPermissionNodes?.length ? selectedUserPermissionNodes.length : ''}
                        </Button>
                    </TableToolbar>
                    <AgGridReact
                        domLayout="autoHeight"
                        defaultColDef={userPermissionsTableColumnsDefs}
                        columnDefs={userPermissionsTableColumns(deleteUserPermissionAction)}
                        onSelectionChanged={userPermissionRowsSelectionChanged}
                        onGridReady={handleUserPermissionsGridReady}
                        suppressLoadingOverlay
                    />
                </Col>
            </Row>
        </Container>
    );
};
