import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import profile from "./images/profile.png"
import { withFirebase } from '../../../firebase';
import Nav from 'react-bootstrap/Nav'
import {Link} from "react-scroll";
import Headroom from "react-headroom";
import logo from "./images/slingshot-logo.svg"
import Navbar from 'react-bootstrap/Navbar' 
import "./Navbar.scss"
import "./SimpleNavbar.scss"
import "./footer.scss"
import "./ProfileNavbar.scss"
import "./SkillsSelect.scss"
import Select from "react-select";
import User from "../../../models/User";
import './Become.scss';
import './CallToAction.scss';
import '../Journey/Journey.scss'
import "./footer.scss"
import bulb from "./images/Dream.png"
import "./Mentor_Intro.scss";
 








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

function NavbarWrapperhelperone(props) {
    return <NavbarWrapperHelperWithFirebase {...props}/>
}


class SkillsSelect extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {skillsOptions: null, selectedSkills: []}
        this.mentorHandler = new User(User.UserTypeMentor, this.props.firebase.db, this.props.firebase.storage);
    
        this.mentorHandler.getSkillsOptions().then((options) => {
            this.setState({skillsOptions: options});
        })
    }
    selectstyles = {
        control: (base, state) => ({
          ...base,
          padding:"1% 0%",
          borderRadius:"10px",
          border: "1px solid #ccc",
          backgroundColor: "#F8F8F8",
        }),
        menu: base => ({
          ...base,
          textAlign: "left",
        }),
    }

    render(){
            return this.state.skillsOptions !== null ? 
            <div className="select-container-style center">
                <div className = "select-style">
                    <Select 
                        id="Skills"
                        className="select-style center"
                        placeholder="Select Skills" 
                        isMulti
                        onChange={this.props.handleSkillSelectChange}
                        styles={this.selectstyles}
                        options={this.state.skillsOptions} 
                    /> 
                </div>
            </div>:
            <div>Loading...</div>
    }

}

function simpleNavbarWrapper() {
    return (       
        <Navbar className="navbar-style" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand className="hide-style" href="#home"><img className="logo-img" src={logo} alt="down arrow" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            </Navbar.Collapse>
        </Navbar>
    )
}

class Become extends Component {
    render() {
      return (
        <div className="mentor-call-to-action-component">
            <div className="mentor-call-to-action-section-header-style">
              Become a Serial Entrepreneur 
            </div>  

            <div className="mentor-call-to-action-section-text-style">
            At Slingshot, brainstorm and collaborate on <span className="orange-text">new ideas</span>,<span className="green-text"> diversify your 
            startup portfolio</span>, and build <span className="yellow-text">investor-ready ventures</span> as you inspire the 
            next generation of high school leaders.    
            </div>
            <div className="mentor-call-to-action-section-subtext-style">
              For no cost & no more than 3 hours a week!   
            </div>    
           <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/irMjdW8iLdZsKNVWA">
            <button className="mentor-call-to-action-button">JOIN TODAY</button>
          </a>
        </div>
      )
    }
  }
 
class CallToAction extends Component {
  
    render() {
      return (
        <div className="call-to-action-component journey-container-style">
            <div className="call-to-action-section-header-style">
                Are you ready to slingshot ahead?    
            </div>  
            <div className="call-to-action-section-text-style">
                The only requirements<br />
                Passion, problem solving skills, and 12 weeks    
            </div>    
           <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">
            <button className="call-to-action-button journey-apply-style">APPLY NOW</button>
          </a>
        </div>
      )
    }
  }
  
  function FooterWrapperone() {
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

function Intro() {
    return (
      <div className="mentorintro-container-style" id="mentorintro">
        <div className="mentorintro-content-style">
          <div className="mentorintro-text-style">
          Have you ever struggled to fall asleep at night because you couldn’t stop 
          thinking of ideas that could change the world?
          </div>
          <div className="mentorintro-subtext-style">
              Join us today and slingshot those ideas into realities.
          </div>
          <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/irMjdW8iLdZsKNVWA">
            <button className="mentorintro-apply-style" >APPLY NOW</button>
          </a>
        </div>
        <img className="mentorintro-image-style" src={bulb} alt="down arrow" />
      </div>
    )
  }

function NavbarWrappertwo() {
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
                            <Link className="navlink-style" to="how-it-works" spy={true} smooth={true} duration={500}>
                                How It Works
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="navlink-style" to="the-experience" spy={true} smooth={true} duration={500}>
                                The Experience
                            </Link>
                        </Nav.Link>
                        <Nav.Link className="navlink-style" href="https://forms.gle/irMjdW8iLdZsKNVWA" target="_blank">
                            <b className="apply-button-style">APPLY</b>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Headroom>
    )
}


 
export  {NavbarWrapper,NavbarWrapper,NavbarWrapperHelper,NavbarWrapperhelperone,SkillsSelect, simpleNavbarWrapper,Become,CallToAction, FooterWrapper,FooterWrapperone,Intro,NavbarWrappertwo};