import { ReactNode } from 'react';
import React from 'react';

interface Props {
    children: ReactNode;
    id: string;
}

const TableDataCell = ({ children, id }: Props) => {
    return (
        <td key={id} className="px-6 py-4 whitespace-nowrap">
            {children}
        </td>
    );
};

export default TableDataCell;
