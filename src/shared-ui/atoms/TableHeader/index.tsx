import { ReactNode } from 'react';
import React from 'react';

interface Props {
    children: ReactNode;
    id: string;
}

const TableHeader = ({ children, id }: Props) => {
    return (
        <th key={id} className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            {children}
        </th>
    );
};

export default TableHeader;
