import { Permission } from 'core/domainModels/users/permission';
import React from 'react';
import { createColumnHelper, useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table';
import { TableRow } from 'shared-ui/atoms/TableRow';
import { usePermissions } from 'shared-hooks/usePermissions';
import { TableDataCell } from 'shared-ui/atoms/TableDataCell';
import { TableHeader } from 'shared-ui/atoms/TableHeader';

const columnHelper = createColumnHelper<Permission>();

const columns = [
    columnHelper.accessor('id', {
        cell: row => row.getValue(),
    }),
    columnHelper.accessor('title', {
        cell: row => row.getValue(),
    }),
    columnHelper.accessor('slug', {
        cell: row => row.getValue(),
    }),
    columnHelper.accessor('usersCount', {
        cell: row => row.getValue(),
    }),
];

const PermissionsDashboard = (): JSX.Element => {
    const { permissions } = usePermissions();

    const table = useReactTable<Permission>({
        columns: columns,
        data: permissions,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            {permissions && (
                <div className="mt-6 overflow-x-auto">
                    <table className="w-full whitespace-nowrap">
                        <thead>
                            {table.getHeaderGroups().map(headerGroup => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map(header => (
                                        <TableHeader key={header.id}>
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
                                <TableRow key={row.id}>
                                    {row.getVisibleCells().map(cell => (
                                        <TableDataCell key={cell.id}>
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

export default PermissionsDashboard;
