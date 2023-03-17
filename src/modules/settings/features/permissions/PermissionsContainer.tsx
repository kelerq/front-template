import { Permission } from 'core/domainModels/users/permission';
import React from 'react';
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { usePermissions } from 'shared-hooks/usePermissions';
import TableDataCell from 'shared-ui/atoms/TableDataCell';
import TableHeader from 'shared-ui/atoms/TableHeader';
import TableRow from 'shared-ui/atoms/TableRow';

const columnHelper = createColumnHelper<Permission>();

const columns = [
    columnHelper.accessor('id', { cell: row => row.getValue() }),
    columnHelper.accessor('title', { cell: row => row.getValue() }),
    columnHelper.accessor('slug', { cell: row => row.getValue() }),
    columnHelper.accessor('usersCount', { cell: row => row.getValue() }),
];

const usePermissionsDashboard = () => {
    const { permissions } = usePermissions();

    const table = useReactTable<Permission>({
        columns,
        data: permissions,
        getCoreRowModel: getCoreRowModel(),
    });

    return { permissions, table };
};

const PermissionsContainer = (): JSX.Element => {
    const { permissions, table } = usePermissionsDashboard();

    return (
        <>
            {permissions && (
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <TableRow id={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <TableHeader id={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.header, header.getContext())}
                                        </TableHeader>
                                    ))}
                                </TableRow>
                            ))}
                        </thead>
                        <tbody>
                            {table.getRowModel().rows.map(row => (
                                <TableRow id={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableDataCell id={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableDataCell>
                                    ))}
                                </TableRow>
                            ))}
                        </tbody>
                        <tfoot>
                            {table.getFooterGroups().map(footerGroup => (
                                <tr key={footerGroup.id}>
                                    {footerGroup.headers.map(header => (
                                        <th key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(header.column.columnDef.footer, header.getContext())}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </tfoot>
                    </table>
                </div>
            )}
        </>
    );
};

export default PermissionsContainer;
