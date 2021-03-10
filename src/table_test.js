import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import ListRowComponent from './ListRowComponents';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Item_name', headerName: 'Item name', width: 130 },
  // { field: 'lastName', headerName: 'Last name', width: 130 },
  // {
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  // },
];

// const rows = [
//   { id: 1, lastName: 'Snow', Item_name: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', Item_name: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', Item_name: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', Item_name: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', Item_name: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', Item_name: null, age: 150 },
//   { id: 7, lastName: 'Clifford', Item_name: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', Item_name: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', Item_name: 'Harvey', age: 65 },
// ];




// export default function DataTable() {
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
//     </div>
//   );
// }


export default class DataTable extends React.Component {

  state ={ lists: [], loading: true, token: null}


  async componentDidMount(){
    const config = {
      headers: {
          'Content-Type': 'application/json'
        }
    }
    config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
    // config.headers['Authorization'] = 'Token f0d55196016fc233de4f14c5ec899b9146cd856b' 

    var url = "http://127.0.0.1:8000/list/";
    const response =await fetch(url,config);
    const data = await response.json();
    console.log(data);
    this.setState({lists:data,loading:false});

  


  }

  render(){

    const listsApi = this.state.lists;
    const rows = [listsApi.map(list=> <ListRowComponent id={list.id} name={list.name}/>)]

    console.log(rows);
    return (
      // <div style={{ height: 400, width: '100%' }}>
      //   <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      // </div>

            <div>
                 {/* <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection /> */}
                 <span>Fazendo ainda</span>
            </div>
    );
  }

  
}