import React from "react";
import './Services.css';
import Building from '../Imgs/Building.png';
import Road from '../Imgs/road.png';
import Water from '../Imgs/water.png';
import Power from '../Imgs/power.png';
import Spliter from '../Imgs/spliter.png';










const Services=()=> {
return(
    <div className="services-content">
        <h1>Services</h1>
<div className="list-container">
        <div className="list-col-1">
             <div className="services-card">
                <p>Building</p>
                <img className="card-image" src={Building} alt="building"></img>
                    <b> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Et molestie ac feugiat sed lectus vestibulum. 
                    </b>
            </div>
            <div className="services-card">
                <p>Water</p>
                <img className="card-image" src={Water} alt="water"></img>
                    <b> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Et molestie ac feugiat sed lectus vestibulum. 
                    </b>
            </div>
        </div>
        <img className="spliter" src={Spliter} alt="spliter"></img>
           <div className="list-col-2">
                  <div className="services-card">
                <p>Road</p>
                <img className="card-image" src={Road} alt="road"></img>
                    <b> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Et molestie ac feugiat sed lectus vestibulum. 
                    </b>
            </div>
            <div className="services-card">
                <p>Power</p>
                <img className="card-image" src={Power} alt="power"></img>
                    <b> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Et molestie ac feugiat sed lectus vestibulum. 
                    </b>
            </div>

           </div>
         </div>


    </div>
)
}

export default Services;