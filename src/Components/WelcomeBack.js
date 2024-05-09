import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

// Create the Welcome Back component to pass props to the App component
function Welcome(props) {
    return (
        <div>
            <Container fluid>
                <Row className="welcome_row">
                    <Col className="welcome" xs={5}><Stack className="welcome" gap={3}>
                        <div id="welcome_back">Welcome back</div>
                        <div id="time_to_enjoy">Right, time to enjoy the good stuff.</div>
                        <Button id="start_streamingBtn">Start streaming</Button>
                        <Button variant="outline-secondary" id="offersBtn">View your exclusive offers</Button>
                    </Stack></Col>
                    <Col className="prog_image"><img src={props.picture} alt="Programme image"/></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Welcome;