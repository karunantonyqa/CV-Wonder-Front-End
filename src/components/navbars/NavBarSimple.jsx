import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
import Product from '../../Product';
import {TouchableHighlight, Image} from 'react-native';

// import {LinkContainer} from 'react-router-bootstrap';



export default class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
    this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }


    render() {

        var redirectPath = this.state.redirectPath;
        console.log(this.state);
        console.log(redirectPath);
        if (redirectPath === "Trainer") {
          return <Redirect to="/Trainer" />;
        }
        if (redirectPath === "Trainee") {
          return <Redirect to="/Trainee" />;
        }

        var navStyle = {
            color: 'black'
        }

        var navBarStyle = {
            color: '#FFA07A',
            fontSize: '18pt'
        }

        var profileImgContainer = {
            marginLeft: 8,
            height: 150,
            width: 80,
            borderRadius: 40,
          }
    
          var profileImg = {
            height: 150,
            width: 150,
            borderRadius: 200

          }
    
          var logoStyle = {
            height: '100px',
            width: '200px',
            
            
          }


        return (

                


            <div class="p-3 mb-2 bg-dark text-white" className="NavBarMain" style={navBarStyle}>
        
                <Navbar className="navbar fixed-top " expand="md" scrolling style={navBarStyle}>
                    
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        
                    <NavbarNav center>
                        <NavbarBrand href="/">
                        <div style={navStyle}><strong>CV Wonder</strong></div>
                        </NavbarBrand></NavbarNav>
                        <NavbarNav right>


                        {/* <nav className="navbar navbar">
                         <ul className="nav">
                            <li>
                         <Link to="/Product">Contact</Link>
                         </li>
                        </ul>
                        </nav> */}

                        <NavItem >
                              <Link to="/Product"><div style={navStyle}>Contact</div></Link>
                        </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            

            <Switch>
            <Route path="/Product" component={Product} />
            </Switch>
            </div>
        );
    }
}