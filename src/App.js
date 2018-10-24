import React, { Component } from 'react';
import Category from "./Category";
import Products from "./Products";
import Adduser from "./Adduser";
import Login, {fakeAuth} from "./Login";
import login from "./login2";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import './App.css';
import LoginPage from './containers/LoginPage';
import AddUser from './containers/AddUser';
import TraineePage from './containers/TraineePage';
import TrainerPage from './containers/TrainerPage';
import SoftskillsPage from './containers/SoftskillsPage';
import SalesPage from './containers/SalesPage';



class App extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
   

    return (
      <div>
      <Switch>
        <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Trainer" component={TrainerPage} />
        <Route path="/Trainee" component={TraineePage} />
        <Route path="/Softskills" component={SoftskillsPage} />
        <Route path="/Sales" component={SalesPage} />
        <Route path="/Contact" component={TraineePage} />
        <Route path="/Logout" component={LoginPage} />
        <Route path="/login" component={Login} />
        <Route path="/login2" component={login} />
        <Route path="/adduser" component={Adduser} />
        <Route path="/category" component={Category} />
        {/* <PrivateRoute path="/admin" component={Admin} /> */}
        <Route path="/products" component={Products} />
        </div>
      </Switch>
    </div>
  );
}
}

export default App;
