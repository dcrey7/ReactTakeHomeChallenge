import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar' 
import Nav from 'react-bootstrap/Nav'
import profile from "./images/profile.png"
import logo from "./images/slingshot-logo.svg"
import "./ProfileNavbar.scss"
import { withFirebase } from '../../../firebase';

class NavbarWrapperHelper extends Component {

    constructor(props) {
        super(props);
        this.action = this.action.bind(this)
    }

    action() {
        if (this.props.action) {
            this.props.action();
        }   
    }

    render() {
        return  (       
            <Navbar className="navbar-style" collapseOnSelect expand="lg" variant="dark">
                <Navbar.Brand className="hide-style" href="/"><img className="logo-img" src={logo} alt="down arrow" /></Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link className="navlink-style" target="_blank">
                        <img className="profile-img" src={profile} alt="down arrow" onClick={() => this.action()}/>
                        </Nav.Link>
                    </Nav>
            </Navbar>
        )
    }
}

const NavbarWrapperHelperWithFirebase = withFirebase(NavbarWrapperHelper);

function NavbarWrapper(props) {
    return <NavbarWrapperHelperWithFirebase {...props}/>
}

export default NavbarWrapper;