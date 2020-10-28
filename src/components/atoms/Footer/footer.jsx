import React from "react";
import {Link} from "react-scroll";
import { MDBContainer } from "mdbreact";
import "./footer.scss"

function FooterWrapper() {
    return (
        <div>
            <div className="footer-row-style">
                <div className="footer-col-style site-map">
                    <div className="footer-header-style">Site Map</div>
                    <div className="footer-link-group footer-content-style">
                        <Link className="navlink-style" to="intro" spy={true} smooth={true} offset={"-70vh"} duration={500}>
                                    Home
                        </Link>
                        <Link className="navlink-style" to="program" spy={true} smooth={true} duration={500}>
                                    Program
                        </Link>
                        {/* <Link className="navlink-style" to="about-us" spy={true} smooth={true} duration={500}>
                                    About
                        </Link> */}
                        <Link className="navlink-style" to="journey" spy={true} smooth={true} duration={500}>
                                    Journey
                        </Link>
                    </div>
                    </div>
                <div className="footer-divider-style" />
                <div className="footer-col-style">
                    <div className="footer-header-style">
                        Contact Us!
                    </div>
                    <div className="footer-content-style">
                        <a href="mailto:slingshotmentoring@gmail.com">slingshotmentoring@gmail.com</a>
                    </div>
                </div>
                <div className="footer-divider-style" />
                <div className="footer-col-style">
                    <div className="footer-header-style">
                        Be a mentor!
                    </div>
                    <div className="footer-content-style">
                        <a href="/mentoring">slingshotmentoring.com/mentoring</a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid> Slingshot Mentoring
                    </MDBContainer>
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: All rights reserved.
                    </MDBContainer>
            </div>
        </div>
        
    )
}

export default FooterWrapper;