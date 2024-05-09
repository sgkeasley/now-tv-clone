import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Stack from "react-bootstrap/Stack";
import image1 from "./Images/Game_of_Thrones_thumb.png";
import image2 from "./Images/SWAT_thumb.png";
import image3 from "./Images/Red_King_thumb.png";
import image4 from "./Images/FBI_thumb.png";

// Create the Your next watch component
function Next() {
    return (
        <div className="next">
            <h2 className="section_headings">Your next watch</h2>
            <br></br>
            <Stack className="next_watch_options" direction="horizontal" gap={3}>
                <div>TV SHOWS<br></br><p className="line">_____________</p></div>
                <div>CINEMA<br></br><p className="line">__________</p></div>
                <div>SPORT<br></br><p className="line">________</p></div>
            </Stack>
            <br></br>
            <Stack className="prog_image_options" direction="horizontal" gap={4}>
                <div> <img src={image1} alt="Programme image"/> </div>
                <div> <img src={image2} alt="Programme image"/> </div>
                <div> <img src={image3} alt="Programme image"/> </div>
                <div> <img src={image4} alt="Programme image"/> </div>
            </Stack>
        </div>
    );
}

export default Next;