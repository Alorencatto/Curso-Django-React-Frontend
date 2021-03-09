import React from 'react';
import ListComponent from './ListComponent';
import LoginComponent from './LoginComponent';

export default class UserLists extends React.Component{

    //Chamanda a API
    state ={ lists: [], loading: true}

    //FUnção que chama a API
    async componentDidMount() {
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
        console.log(data)
        this.setState({lists:data,loading:false});
    }

    render(){

        const listsApi = this.state.lists;
        var token = localStorage.getItem('token');
        
        if (!token)
            return <LoginComponent/>
        else
            return (
                // <div>
                //     <ListComponent listName={'Minha Lista 1'}/>
                //     <ListComponent listName={'Minha Lista 2'}/>
                // </div>
                <div>
                    {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />)}
                </div>
            )

    }
   
}