import React from 'react';
import ListComponent from './ListComponent';

export default class UserLists extends React.Component{

    //Chamanda a API
    state ={ lists: null, loading: true}

    //FUnção que chama a API
    async componentDidMount() {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        // config.headers['Authorization'] = 'Token ' + localStorage.getItem('token');
        config.headers['Authorization'] = 'Token f0d55196016fc233de4f14c5ec899b9146cd856b' 

        var url = "http://127.0.0.1:8000/list/";
        const response =await fetch(url,config);
        const data = await response.json();
        console.log(data)
        this.setState({lists:data,loading:false});
    }

    render(){
        return (
            <div>
                <ListComponent listName={'Minha Lista 1'}/>
                <ListComponent listName={'Minha Lista 2'}/>
            </div>
        )

    }
   
}