import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// Create the Navigation Menu component
function Navigation() {
    return (
        <div>
            <Container fluid>
                <Row className="navigation">
                    <Col className="navigation_col">How NOW works</Col>
                    <Col className="navigation_col">What's on</Col>
                    <Col className="navigation_col">TV Membership</Col>
                    <Col className="navigation_col">Broadband</Col>
                    <Col className="navigation_col">How to watch</Col>
                    <Col className="navigation"><Button className="navStrmBtn">Start streaming</Button></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Navigation;
