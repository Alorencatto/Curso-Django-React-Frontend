import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import ListRowComponent from './ListRowComponents';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 70 },
//   { field: 'firstName', headerName: 'First name', width: 130 },
//   { field: 'lastName', headerName: 'Last name', width: 130 },
  
// ];

// const rows = [
//   { id: 1, lastName: 'Snow' },
//   { id: 2, lastName: 'Lannister' },
//   { id: 3, lastName: 'Lannister' },
  
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
    // console.log(data);
    this.setState({lists:data,loading:false});
  }

  render(){

    const columns = [
      { field: 'id', headerName: 'ID', width: 70 },
      { field: 'name', headerName: 'Nome da Lista', width: 180 },
    ];

    const rows_original = [
            { id: 1, lastName: 'Snow' },
            { id: 2, lastName: 'Lannister' },
            { id: 3, lastName: 'Lannister' },
            
          ];

    const listsApi = this.state.lists;
    // const rows = [listsApi.map(list=> <ListRowComponent id={list.id} name={list.name}/>)]

    // const rows = [{'id':'','name': ''}];

    const rows = [];

    for( var key in listsApi){
      var value = listsApi[key]
      rows.push({'id':value.id,'name':value.name});
    }

    console.log(rows)



    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
    )
  }

  
}