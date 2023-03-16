import React from 'react';

interface TableDataCellProps {
    children: React.ReactNode;
    key: string;
}

export const TableDataCell = (props: TableDataCellProps) => {
    return (
        <td key={props.key} className="px-6 py-4  whitespace-nowrap">
            {props.children}
        </td>
    );
};
