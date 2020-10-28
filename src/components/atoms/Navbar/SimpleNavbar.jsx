import React from "react";
import Navbar from 'react-bootstrap/Navbar' 
import logo from "./images/slingshot-logo.svg"


import "./SimpleNavbar.scss"

function NavbarWrapper() {
    return (       
        <Navbar className="navbar-style" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand className="hide-style" href="#home"><img className="logo-img" src={logo} alt="down arrow" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarWrapper;