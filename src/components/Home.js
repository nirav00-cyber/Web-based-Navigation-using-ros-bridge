import React from 'react'
import Connection from "./Connection";
// import Teleoperation from './Teleoperation';
import { Row, Col, Container, Button } from "react-bootstrap";

function Home() {
    return (
      <>
        <Container>
          <h1 className="text-center mt-3">ROBOT CONTROL PAGE</h1> 
          <Row>
            <Col>
          <Connection /> 
            </Col>
          </Row>

        <Row>
            <Col>
          {/* <Teleoperation /> */}
            </Col>
            <Col>
              <h1> FOR MAP</h1>
            </Col>
          </Row>          
        </Container>
      </>

  )
}

export default Home