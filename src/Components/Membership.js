import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import icon1 from "./Images/streaming_icon.png";
import icon2 from "./Images/offers_icon.png";
import icon3 from "./Images/help_icon.png";
import Button from "react-bootstrap/Button";

// Create the My NOW Membership component
function Membership() {
    return (
        <div className="membership">
            <h2 className="section_headings">My NOW Membership</h2>
            <br></br>
            <Stack className="membership_options" direction="horizontal" gap={3}>
                <Stack className="mem_options_box" id="streaming" gap={1}>
                    <img src={icon1} />
                    <h3>Start streaming</h3>
                    <p>Enjoy what you love, right away.</p>
                    <Button variant="link">Watch NOW</Button>
                </Stack>
                <Stack className="mem_options_box" id="offers" gap={1}>
                    <img src={icon2} />
                    <h3>My Offers</h3>
                    <p>Exclusive offers, just for you.</p>
                    <Button variant="link">View my offers</Button>
                </Stack>
                <Stack className="mem_options_box" id="help_box" gap={1}>
                    <img src={icon3} />
                    <h3>Need help?</h3>
                    <p>Go to Help Centre.</p>
                    <Button variant="link">Learn about NOW</Button>
                </Stack>
            </Stack>
        </div>
    );
}

export default Membership;