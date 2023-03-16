import React from 'react';

interface TableHeaderProps {
    children: React.ReactNode;
    key: string;
}

export const TableHeader = (props: TableHeaderProps) => {
    return (
        <th key={props.key} className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
            {props.children}
        </th>
    );
};
