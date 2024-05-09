import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import fb from "./Images/fb_icon.png";
import x from "./Images/x_icon.png";
import inst from "./Images/i_icon.png";
import yt from "./Images/yt_icon.png";
import lnkdin from "./Images/li_icon.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Create the Footer component
function Footer() {
    return (
        <div className="footer">
            <Stack className="footer_icons" direction="horizontal" gap={2}>
                <img src={fb} />
                <img src={x} />
                <img src={inst} />
                <img src={yt} />
                <img src={lnkdin} />
            </Stack>
            <br></br>
            <Container className="footer_items" fluid>
                <Row>
                    <Col className="footer_col">The Legal Bit v</Col>
                    <Col className="footer_col">Work for Us</Col>
                    <Col className="footer_col">Privacy & Cookies</Col>
                    <Col className="footer_col">Community</Col>
                    <Col className="footer_col">Complaints</Col>
                    <Col className="footer_col">Accessibility</Col>
                    <Col className="footer_col">Terms & Conditions</Col>
                    <Col className="footer_col">Privacy Options</Col>
                    <Col className="footer_col">How to Contact Us</Col>
                    <Col className="footer_col">Our Charity Partner v</Col>
                    <Col className="footer_col">Go to Ireland site</Col>
                </Row>
            </Container>
            <br></br>
            <p id="nowtv_link">Cloned from: <a target="_blank" href="https://www.nowtv.com/home/existing">NOW TV - Existing Members</a> 
              - content/layout may be different for non-members.</p>
        </div>
    );
}

export default Footer;