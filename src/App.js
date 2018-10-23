import React, { Component } from 'react';
import NavBarFeatures from './containers/NavBarFeatures';
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
import logo from './logo.svg';
import './App.css';
import LoginPage from './containers/LoginPage';
import Dashboard from './containers/Dashboard';
import AddUser from './containers/AddUser';
import TraineePage from './containers/TraineePage';
import TrainerPage from './containers/TrainerPage';


class App extends Component {

  constructor(props) {
    super(props); 
  }

  render() {
   

    return (
      <div>
      <nav className="navbar navbar">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adduser">Add User</Link>
          </li>
          <li>
            <Link to="/login2">Login 2</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/admin">Admin area</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route path="/Dashboard" component={Dashboard} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/Trainer" component={TrainerPage} />
        <Route path="/Trainee" component={TraineePage} />
        <Route path="/Contact" component={TraineePage} />
        <Route path="/Logout" component={LoginPage} />
        <Route path="/login" component={Login} />
        <Route path="/login2" component={login} />
        <Route exact path="/" component={Home} />
        <Route path="/adduser" component={Adduser} />
        <Route path="/category" component={Category} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/products" component={Products} />
        </div>
      </Switch>
    </div>
  );
}
}

//Private router function
const PrivateRoute = ({ component: Component, ...rest }) => {
return (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )}
  />
);
};

//Home component
const Home = props => (
<div>
  <h2>Home {console.log(props)}</h2>
</div>
);

//Admin component
const Admin = ({ match }) => {
return (
  <div>
    {" "}
    <h2>Welcome admin </h2>
  </div>
);
};

export default App;
