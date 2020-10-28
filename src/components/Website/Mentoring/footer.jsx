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
                        <a className="navlink-style" href="/" style={{textDecoration: 'none'}}>
                                    Home
                        </a>
                        <Link className="navlink-style" to="how-it-works" spy={true} smooth={true} duration={500}>
                                    How it works
                        </Link>
                        <Link className="navlink-style" to="the-experience" spy={true} smooth={true} duration={500}>
                                    The Experience
                        </Link>
                    </div>
                    </div>
                <div className="footer-divider-style" />
                <div className="footer-col-style">
                    <div className="footer-header-style">
                        Contact Us!
                    </div>
                    <div className="footer-content-style">
                        <a href="mailto:slingshot@slingshotmentoring.com">slingshot@slingshotmentoring.com</a>
                    </div>
                </div>
                <div className="footer-divider-style" />
                <div className="footer-col-style">
                    <div className="footer-header-style">
                        Apply!
                    </div>
                    <div className="footer-content-style">
                        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/irMjdW8iLdZsKNVWA">Application form</a>    
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