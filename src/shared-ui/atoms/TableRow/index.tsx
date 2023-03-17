import { ReactNode } from 'react';
import React from 'react';

interface Props {
    children: ReactNode;
    id: string;
}

const TableRow = ({ children, id }: Props) => {
    return (
        <tr key={id} className="h-16 border border-gray-100 rounded focus:outline-none">
            {children}
        </tr>
    );
};

export default TableRow;
