import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Item_name', headerName: 'Item name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', Item_name: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', Item_name: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', Item_name: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', Item_name: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', Item_name: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', Item_name: null, age: 150 },
  { id: 7, lastName: 'Clifford', Item_name: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', Item_name: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', Item_name: 'Harvey', age: 65 },
];



export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}