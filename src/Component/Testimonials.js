import React from "react";
import './Testimonials.css';
import jimmy from '../Imgs/jimmy-jimmy-1484794.jpg'
import Bruno from '../Imgs/bruno-salvadori-2269872.jpg';
import David from '../Imgs/david-gonzales-2406949.jpg';
import doubleQuote from '../Imgs/doubleQuote.png';




const Testimonials=()=> {
return(
    <div className="testimonials-content">
        <h1>Testimonials</h1>
            <div className="testimonials">
                <div className="testimonial">
                <img className="doubleQuote" src={doubleQuote} alt="doubleQuote"></img>
                    <img className="jimmy" src={jimmy} alt="jimmy"></img>
                    <p>
                        Awesome service, and very professional customer support! 
                        I'm a very happy customer, thanks.
                    </p>
                </div>
                <b>ProwAB2012 - Customer</b>
                <div className="testimonial">
                <img className="doubleQuote" src={doubleQuote} alt="doubleQuote"></img>
                <img className="bruno" src={Bruno} alt="bruno"></img>
                    <p>
                        Awesome service, and very professional customer support! 
                        I'm a very happy customer, thanks.
                    </p>
                </div> 
                <b>ProwAB2012 - Customer</b>
                <div className="testimonial">
                <img className="doubleQuote" src={doubleQuote} alt="doubleQuote"></img>
                <img className="david" src={David} alt="david"></img>
                    <p>
                        Awesome service, and very professional customer support! 
                        I'm a very happy customer, thanks.
                    </p>
                </div>
                <b>ProwAB2012 - Customer</b>
            </div>
    </div>
)
}

export default Testimonials;