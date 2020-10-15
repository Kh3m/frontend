import React, { useState } from 'react'
import { Link, withRouter, useLocation, NavLink } from 'react-router-dom'
import logo from "../images/logo.png";

function Navbar({ modalOpen, setModalOpen }) {

    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const homeClass = location.pathname.match(/^\/(?!information)(?!contact)(?!about)[\s\S]*$/) ? "active" : ""
    const infoClass = location.pathname.match(/^\/information/) ? "active" : ""
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : ""
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : ""

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
                <ul className={isOpen ? "nav-mobile" : "nav-links"}>
                    <Link to="/" className={homeClass}><li>Flights</li></Link>
                    <Link to="/information" className={infoClass}><li>Information</li></Link>
                    <Link to="/contact" className={contactClass}><li>Contact Us</li></Link>
                    <Link to="/about" className={aboutClass}> <li>About Us</li></Link>
                    <li id="signin" onClick={() => setModalOpen(!modalOpen)} >Sign in</li>
                </ul>
            </header>
            <div className={isOpen ? "overlay" : "hidden"}></div>
        </>

    )
}
export default withRouter(Navbar)