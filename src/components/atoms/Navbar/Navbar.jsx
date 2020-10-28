import React from "react";
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-scroll";
import Headroom from "react-headroom";
import logo from "./images/slingshot-logo.svg"


import "./Navbar.scss"

function NavbarWrapper() {
    return (
        <Headroom style={{
            WebkitTransition: 'all 0.5s ease-in-out',
            MozTransition: 'all 0.5s ease-in-out',
            OTransition: 'all 0.5s ease-in-out',
            transition: 'all 0.5s ease-in-out',
        }}>
            <Navbar className="navbar-style" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="hide-style" href="/"><img className="logo-img" src={logo} alt="down arrow" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <Link className="navlink-style" to="intro" spy={true} smooth={true} duration={500}>
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navlink-style" to="program" spy={true} smooth={true} duration={500}>
                                Program
                            </Link>
                        </Nav.Link>
                        {/* <Nav.Link>
                            <Link className="navlink-style" to="about-us" spy={true} smooth={true} duration={500}>
                                About Us
                            </Link>
                        </Nav.Link> */}
                        <Nav.Link>
                            <Link className="navlink-style" to="journey" spy={true} smooth={true} duration={500}>
                                Journey
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="navlink-style" href="https://forms.gle/XrtjBEnuRacLgyqh7" target="_blank">
                            <b className="apply-button-style">APPLY</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Headroom>
    )
}

export default NavbarWrapper;