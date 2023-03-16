import React from 'react';

interface TableRowProps {
    children: React.ReactNode;
    key: string;
}

export const TableRow = (props: TableRowProps) => {
    return (
        <tr key={props.key} className="h-16 border border-gray-100 rounded focus:outline-none">
            {props.children}
        </tr>
    );
};
