import React from "react";
import './About.css'
import image from '../Imgs/about-section-image.svg';



const About=()=> {
return(
        <div className="about-content">
            <div className="about-text"> 
            <h1>About</h1>
                <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed lectus vestibulum. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Nulla pellentesque dignissim enim sit. Pharetra convallis posuere morbi leo urna molestie at elementum. Amet commodo nulla facilisi nullam vehicula ipsum a.
                </p>
                <p>
                     Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. Convallis tellus id interdum velit laoreet id donec ultrices. Magna ac placerat vestibulum lectus. Egestas fringilla phasellus faucibus scelerisque. 
                </p>
            </div>
            <div className="about-images">
                    <img className="about-image" src={image} alt="aboutImage"></img>
            </div>
        </div>


 
)
}

export default About;