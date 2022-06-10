import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css';





const Nav=()=> {
return(
    <div>
        <header>
                <nav>
                    <div className="links">
                       <NavLink exact to="/" className="link" activeClassName="activeLink">Home</NavLink>
                       <NavLink to="/about" className="link" activeClassName="activeLink">About</NavLink>
                       <NavLink to="/services" className="link" activeClassName="activeLink">Services</NavLink>
                       <NavLink to="/testimonials" className="link" activeClassName="activeLink">Testimonials</NavLink>
                       {/* <NavLink to="/footer" className="link" activeClassName="activeLink">Contact</NavLink> */}
                    </div>
                </nav>
        </header>
    </div>
)
}


export default Nav;