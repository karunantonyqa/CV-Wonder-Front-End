import React, { Component } from 'react';
import CryptoJS from 'cryptojs';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import NavbarFeatures from './NavBarFeatures';

class AddUser extends Component {   

    constructor(props) {
        super(props);
    
        this.state = {
          emailstr: "",
          passstr: "",
          name:"",
          role:"",
          city:"",
          redirectPath: "",
          isAuthenticated: false

        };
    }

    validateForm() {
        return this.state.emailstr.length > 0 && this.state.passstr.length > 0;
    }


    handleSubmit(event) {
        var emailstr =  document.getElementById('emailStr').value;
        var passstr = document.getElementById('passStr').value;
        var name = document.getElementById('name').value;
        var role = document.getElementById('roleSelect').value;
        var city = document.getElementById('city').value;
     
     
        const url = "http://localhost:8090/api/people"
       
        var user = JSON.stringify({
          "email": emailstr,
          "name": name,
          "role": role,
          "password":CryptoJS.MD5(passstr).toString(),
          "cv": " ",
          "state": city,
          "docType": null
        })
       
        let xhttp = new XMLHttpRequest();
        xhttp.open("POST", url);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.setRequestHeader('Access-Control-Allow-Origin','*');
        xhttp.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        xhttp.responseType = 'text';
        xhttp.send(user);
     
        xhttp.onload = ()=>{
         console.log(xhttp.responseText);
          }
      }
      render() {
          return (
            <div className="Register">
                <NavbarFeatures class="p-3 mb-2 bg-dark text-white" className="NavBarMain1">
                </NavbarFeatures>

                <form onSubmit={this.handleSubmit}>

                <FormGroup controlId="name" bsSize="sm">
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        autoFocus
                        type="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                     />
                </FormGroup>
                
                <FormGroup controlId="emailStr" bsSize="sm">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                         type="emailStr"
                         value={this.state.emailstr}
                         onChange={this.handleChange}
                     />
                </FormGroup>
                
                <FormGroup controlId="passStr" bsSize="sm">
                    <ControlLabel>Password</ControlLabel>
                     <FormControl
                        value={this.state.passstr}
                        onChange={this.handleChange}
                        type="passStr"
                    />
                </FormGroup>


                <FormGroup controlId="role" bsSize="sm">
                    <ControlLabel>Role</ControlLabel>
                    <select class="form-control" id="roleSelect">
                         <option>Trainee</option>
                          <option>Trainer</option>
                           <option>Sales</option>
                       <option>Manager</option>
                     </select>
                </FormGroup>
                <Button
                    block
                    bsSize="sm"
                    disabled={!this.validateForm()}
                    type="submit"
                    >
                    Register
                </Button>
        </form>
      </div>


          
          );
      }
    }
 
export default AddUser;