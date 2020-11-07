import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, withRouter, useLocation, NavLink } from 'react-router-dom'
import logo from "../images/logo.png";

function Navbar({ modalOpen, setModalOpen }) {

    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const homeClass = location.pathname.match(/^\/(?!information)(?!contact)(?!about)(?!login)[\s\S]*$/) ? "active" : ""
    const infoClass = location.pathname.match(/^\/information/) ? "active" : ""
    const contactClass = location.pathname.match(/^\/contact/) ? "active" : ""
    const aboutClass = location.pathname.match(/^\/about/) ? "active" : ""
    const loginClass = location.pathname.match(/^\/login/) ? "active" : ""

    const userSignin = useSelector(state => state.userSignin)
    const userRegister = useSelector(state => state.userRegister)

    const reg = ({ rgstr }) => { return rgstr && rgstr.userReg }
    const userReg = reg({ rgstr: userRegister })

    const user = ({ usr }) => { return usr && usr.userInfo }
    const userInfo = user({ usr: userSignin })



    // console.log(userSignin + ' ...userSignin')
    // console.log(userInfo + ' ...userInfo')

    // console.log(userRegister + ' ...userRegister')
    // console.log(userReg + ' ...userReg')
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
                    {
                        userSignin && userSignin.name !== undefined ?
                            <Link to="/" className={loginClass} id="profile-button"><li>{userSignin.name.charAt(0).toUpperCase()}</li></Link> :
                            userInfo && userInfo.name !== undefined ?
                                <Link to="/" className={loginClass} id="profile-button"><li>{userInfo.name.charAt(0).toUpperCase()}</li></Link> :
                                userRegister && userRegister.fName !== undefined ?
                                    <Link to="/" className={loginClass} id="profile-button"><li>{userRegister.fName.charAt(0).toUpperCase()}</li></Link> :
                                    userReg && userReg.fName !== undefined ?
                                        <Link to="/" className={loginClass} id="profile-button"><li>{userReg.fName.charAt(0).toUpperCase()}</li></Link>
                                        : <li id="signin" onClick={() => setModalOpen(!modalOpen)} >Sign in</li>
                    }
                </ul>
            </header>
            <div className={isOpen ? "overlay" : "hidden"}></div>
        </>

    )
}
export default withRouter(Navbar)