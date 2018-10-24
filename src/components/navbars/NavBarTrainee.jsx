import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
// import {LinkContainer} from 'react-router-bootstrap';

export default class NavBarTrainee extends React.Component {
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

        // var redirectPath = this.state.redirectPath;
        // console.log(this.state);
        // console.log(redirectPath);
        // if (redirectPath === "Trainer") {
        //   return <Redirect to="/Trainer" />;
        // }
        // if (redirectPath === "Trainee") {
        //   return <Redirect to="/Trainee" />;
        // }

        var navStyle = {
            color: '#AB5050'
        }

        var navBarStyle = {
            color: '#FFA07A'
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
            borderRadius: 2000,
            padding: "40%"
          }
    
          var logoStyle = {
            height: '100px',
            width: '200px',
            
            
          }


        return (
            <div class="p-3 mb-2 bg-dark text-white" className="NavBarMain" style={navBarStyle}>

            
                <Navbar color="blue-grey lighten-5" expand="md" scrolling>
                   
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        
                        <NavbarNav left>

                                                 
                        </NavbarNav>

                        <NavbarNav center>
                        <NavbarBrand href="/">
                        <div style={navStyle}><strong>CV Wonder</strong></div>
                        </NavbarBrand></NavbarNav>

                        
                        
                        
                        <NavbarNav right>
                          

                        <NavItem>
                              <NavLink to="/Contact">Contact</NavLink>
                          </NavItem>

                        <NavItem>
                            <NavLink to="/Logout"> Log out </NavLink>
                        </NavItem>
                        
                        </NavbarNav>
                    </Collapse>
                </Navbar>

                

            
            </div>
        );
    }
}