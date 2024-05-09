import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/NowTV_logo.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Create the Header component
function Header() {
    return (
      <div>
        <Container fluid>
          <Row className="header">
            <Col xs={2}></Col>
            <Col xs={2}></Col>
            <Col xs={1}></Col>
            <Col className="logo">
              <img src={logo} />
            </Col>
            <Col xs={1}></Col>
            <Col xs={2} id="help">Help  v</Col>
            <Col xs={2} id="my_account">My Account  v</Col>
          </Row>
        </Container>
      </div>
    );
}

export default Header;