import * as React from 'react';
import { User } from 'core/domainModels/authorization/user';
import { AgGridReact } from 'ag-grid-react';
import { usersTableColumns, usersTableColumnsDefs } from './models/usersTableColumnDefs';
import { Stack } from '@chakra-ui/react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const users: Array<User> = [
    {
        id: '1',
        firstName: 'Carlin',
        lastName: 'Gwinn',
        email: 'cgwinn0@buzzfeed.com',
        isActive: true,
    },
    {
        id: '2',
        firstName: 'Yetta',
        lastName: 'Snape',
        email: 'ysnape1@princeton.edu',
        isActive: true,
    },
    {
        id: '3',
        firstName: 'Letti',
        lastName: 'Shingfield',
        email: 'lshingfield2@sogou.com',
        isActive: true,
    },
    {
        id: '4',
        firstName: 'Edsel',
        lastName: 'Glencrash',
        email: 'eglencrash3@mlb.com',
        isActive: true,
    },
    {
        id: '5',
        firstName: 'Kaleb',
        lastName: 'Panter',
        email: 'kpanter4@deliciousdays.com',
        isActive: true,
    },
    {
        id: '6',
        firstName: 'Andrei',
        lastName: 'Pegrum',
        email: 'apegrum5@vistaprint.com',
        isActive: true,
    },
    {
        id: '7',
        firstName: 'Kania',
        lastName: 'Andreucci',
        email: 'kandreucci6@aol.com',
        isActive: true,
    },
    {
        id: '8',
        firstName: 'Luz',
        lastName: 'Showers',
        email: 'lshowers7@cam.ac.uk',
        isActive: true,
    },
    {
        id: '9',
        firstName: 'Danya',
        lastName: 'Harbron',
        email: 'dharbron8@yale.edu',
        isActive: true,
    },
    {
        id: '10',
        firstName: 'Alf',
        lastName: 'Ibbotson',
        email: 'aibbotson9@mozilla.com',
        isActive: true,
    },
];

export const UsersContainer = () => {
    return (
        <Stack className="flex flex-col flex-grow h-screen ag-theme-alpine">
            <AgGridReact
                accentedSort={true}
                suppressContextMenu={true}
                getRowNodeId={(data: User) => data.id}
                suppressCellSelection
                rowSelection="multiple"
                defaultColDef={usersTableColumnsDefs}
                columnDefs={usersTableColumns()}
                rowData={users}
                suppressScrollOnNewData={true}
                tooltipMouseTrack
                tooltipShowDelay={0}
                suppressLoadingOverlay
                pagination
                paginationPageSize={5}
            />
        </Stack>
    );
};
