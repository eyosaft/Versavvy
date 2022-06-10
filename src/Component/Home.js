import React from "react";
import './Home.css';
import Background from '../Imgs/heading-image.png';


const Home=()=> {
return(
    <div className="home-content">
            <div className="intro-container">
                  <p>We turn your <strong> dream </strong> into a reality!</p>
            </div>
            <div className="image-container">
                 <img src={Background} alt="Background" className="image"></img>
            </div>
    </div>
)
}

export default Home;