import React, { Component } from 'react';

class NavBarT extends Component {

    constructor(props) {
        super(props); 
      }
    
    render() { 
        return ( <div>
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
              {/* <PrivateRoute path="/admin" component={Admin} /> */}
              <Route path="/products" component={Products} />
              </div>
            </Switch>
          </div> );
    }
}
 
export default NavBarT;