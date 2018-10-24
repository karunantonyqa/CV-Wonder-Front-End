import React, { Component } from "react";
import NavBarTrainee from "../components/navbars/NavBarTrainee";
import ProfilePage from "../containers/ProfilePage";
import { Table, Grid, Row, Col, Clearfix } from "react-bootstrap";
import Background from '../components/images/brick.jpg';


// import ProfilePage from "./containers/ProfilePage";
class TraineePage extends Component {
  render() {


    var bgStyle = {
      width: '100%',
      height: '969px',
      backgroundImage: "url(" + Background + ")",
      backgroundRepeat  : 'no-repeat',
      // backgroundPosition: 'center',
      backgroundSize: "cover",
      color: 'black'
    };
    return (


      <div className="backgroundTrainee" style={bgStyle}>
      <div className="TraineePage">
        <NavBarTrainee
          class="p-3 mb-2 bg-dark text-white"
          className="NavBarMain1"
        />
        <div>
          <h1>**TRAINEE**</h1>
          <Grid>
            <Row className="show-grid">

              <Col xs={6} md={4}>
                <code>
                  <ProfilePage></ProfilePage> 
                </code>
              </Col>

              <Col xs={12} md={8}>
                <code>
                  <p>UPLOAD CV, other stuff here</p>
                </code>
              </Col>

            </Row>
          </Grid>

        </div>
      </div>
      </div>
    );
  }
}

export default TraineePage;