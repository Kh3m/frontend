import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import logo from "../images/logo.png";

export default function Navbar () {
    const [isOpen, setIsOpen] = useState(false)
    return (
       <>
        <header className="header">
        
        <div className="nav-top">
            <Link to="/">
            <img
            className="nav-img"
                src={logo}
                alt="Ijelinks"
              />
            </Link>
              <Link to="/">Call: &emsp;+234 456 6789</Link>
           
        </div>
        <button className="toggle-button" onClick={() => setIsOpen(!isOpen)}>
            &#9776;
        </button>
            <ul className={ isOpen ? "nav-mobile" : "nav-links"}>
                <Link to="/flights/:slug"><li>Flights</li></Link> 
                <Link to="/information"><li>Information</li></Link>
                <Link to="/contact"> <li>Contact Us</li></Link>
                <Link to="/about"> <li>About Us</li></Link>
                <Link to="/login"> <li>Sign in</li></Link>
                </ul>       
            </header>
            <div className={ isOpen ? "overlay" : "hidden"}></div>
            </>
        
    )
}
