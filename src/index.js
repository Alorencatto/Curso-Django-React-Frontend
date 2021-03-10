import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

//Importando os componenetes
import UserLists from './UserLists';
import LoginComponent from './LoginComponent';
//Testes
import Teste from './teste';

import DataTable from './table_test';


// ReactDOM.render(
//   <React.StrictMode>
//     <LoginComponent/>
//     {/* <DataTable/> */}
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  (
      <Router>
              <Switch>
                  <Route exact path="/" component={LoginComponent}/>
                  <Route path="/teste" component={Teste}/>
                  <Route path="/table" component={DataTable}/>
              </Switch>
      </Router>
  ),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
