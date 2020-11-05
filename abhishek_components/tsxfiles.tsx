import React, { ReactNode, ReactNodeArray ,Component} from "react";
import ScrollAnimation from 'react-animate-on-scroll';
import {animateScroll as scroll} from "react-scroll";
import AnimateHeight from 'react-animate-height';
import Typist from 'react-typist';
import Carousel from "react-multi-carousel";
import "./Card.scss";
import "./Logo.scss"
import "./TextInput.scss";
import "./Strip.scss";
import "./Subsection.scss";
import './Modal.scss';
import "./AboutUs.scss"
import "./PeopleCard.scss";
import "./Section.scss";
import "react-multi-carousel/lib/styles.css";
import './AboutUs.scss';
import "./Experience.scss";
import './HowItWorks.scss';
import "./Program.scss";
import free from "./images/free.png"
import collab from "./images/collab.png"
import superhero from "./images/superhero.png"
import connectglobe from "./images/connectearth.png"
import Mentor from "./Mentor";
import close from "./images/close.png";
import Card from "../../atoms/Card/Card";
import picture from "./images/profile.png";
import plus from "./images/plus.png";
import google from "./images/Google.png"
import fb from "./images/FB.png"
import apple from "./images/Apple.png"
import microsoft from "./images/Microsoft.png"
// import resume from "./images/resume.png"
// import rocket from "./images/rocket.png"
import human from "./images/human.png"
import catapulting from "./images/catapulting.png"
import phone from "./images/trophy-phone.png"
import join from "./images/join.png"
import brainstorm from "./images/brainstorm.png"
// import feet from "./images/feet.png"
import colleges from "./images/colleges.png"
import globe from "./images/globe.png"
import Experience from "./Experience/Experience";
import MentorIntro from "./Mentoring/Mentor_Intro";
import HowItWorks from "./HowItWorks/HowItWorks";
import Become from "./Become/Become";
import FooterWrapper from "./Mentoring/footer";
import Navbar from "./Mentoring/Navbar";




type cardProps = {
    children?: ReactNode;
    buttonImageURI?: string;
    onClick?: () => void;
  };

type textinputProps = {
    placeholder?: string;
    onChange: (val: string | null) => void;
    value: string | null;
    width?: string;
  };

type modalProps = {
    children?: ReactNode;
    show: boolean;
    title?: string;

    onClose?: () => void;
}

type peoplecardProps = {
    key?: number;
    name: string;
    email: string;
    img?: string;
    status?: boolean;
    onClose: (key: string) => void;
  };


type sectionProps = {
    children?: ReactNode;
    title?: string;
    breadCrumb?: Array<Array<any>>; // array of string: navigationAction
  
    actionPrompt?: string;
    onAction?: (...key: any) => void;
    link?: Array<string>; // [label, link]
  };

type stripProps = {
        children?: ReactNode;
        weight?: number;
    }   

const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

type State = {
        height: number,
        initHeight: number, 
        finalHeight: number,
        styles: any,
    };


function Card(props: cardProps) {
        const onClickCard = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
          if (props.onClick) {
            props.onClick();
          }
          e.preventDefault();
        };
    return (
      <div className="card-container-style">
        <div className="card-header">
          <img
            alt="button icon"
            src={props.buttonImageURI}
            onClick={onClickCard}
            style={{cursor: "pointer"}}
          />
        </div>
        {props.children}
      </div>
    );
  }
  
 


function TextInput(props: textinputProps) {
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange(e.target.value);
      e.preventDefault();
    };
  
    return (
      <input
        style={{ width: props.width ?? "auto" }}
        value={props.value ?? ""}
        onChange={onChangeInput}
        className="text-input-style"
        type="text"
        placeholder={props.placeholder ?? ""}
      />
    );
  }



function Logo() {
    return (
      <div className="logo-style" onClick={scroll.scrollToTop}>
      SLINGSHOT
      <div className="logo-inner-style">
      <i className="fi-xnllxl-chevron"></i>The College Project Mentors<i className="fi-xnlrxl-chevron"></i>
      </div>
      </div>
    )
  }
  

  


function Modal(props: modalProps) {
    return (
        props.show ? 
            <div className="modal-container-style">
                <div className="modal-content-style">
                    {props.onClose ? <img className="close-style" alt="close" src={close} onClick={props.onClose}/> : null}
                    <div className="title-style">
                        {props.title}
                    </div>
                    <div className="modal-body-style">
                        {props.children}
                    </div>
                </div>
            </div> : null
    );
}




function PeopleCard(props: peoplecardProps) {
    const status = props.status
      ? "Status: Accepted Invite"
      : "Status: Pending Invite";
  
    const onCloseCard = () => {
      props.onClose(props.email);
    };
  
    return (
      <Card onClick={onCloseCard} buttonImageURI={close}>
        <div className="people-card">
          <div className="people-card-img">
            <img alt="user profile" src={props.img ?? picture} />
          </div>
          <div className="people-card-name">{props.name}</div>
          <div className="people-card-description">{props.email}</div>
          {props.status != null && (
            <div className="people-card-status">{status}</div>
          )}
        </div>
      </Card>
    );
  }
  
  

function Section(props: sectionProps) {
 
    const onAction = () => {
      if (props.onAction) {
          props.onAction();
      }
    };
  
    return (
        <div className="section-container-style">
            <div className="section-banner-style">
              <div className="section-title-style">
                  {props.title ? 
                      <div className="title-style">
                      {props.title}
                      </div> : props.breadCrumb ? 
                      <div className="breadcrumb-style">
                          {props.breadCrumb.map((entry: any, index: Number) => {
                              if (props.breadCrumb === undefined) {
                                  return <div />
                              } else if (index !== props.breadCrumb?.length - 1) {
                                  return <div key={entry[0]} onClick={entry[1]} className="link-style">{entry[0]} &#62;</div>
                              } else {
                                  return <div key={entry[0]} onClick={entry[1]} className="link-style">{entry[0]}</div>
                              }
                          })}
                      </div> :
                      <div></div>
                  }
                  
                  {props.actionPrompt ?
                  <div className="action-style" onClick={onAction}>
                      <img alt="plus" src={plus}/>
                      {props.actionPrompt}
                  </div> : <a href={props.link ? props.link[1] : ""}>{props.link ? props.link[0] : ""}</a>}
              </div>
              <hr className="section-banner-divider-style" />
            </div>
            <div className="section-body-style">
              {props.children}
            </div>
        </div>
    );
  }
  

  

function StripExt(props: stripProps) {
    return (
        <div className="strip-ext-style">
            {props.children}
        </div>
    )
}

function StripEven(props: stripProps) {
    const strips: ReactNodeArray = React.Children.toArray(props.children);
    var s: ReactNodeArray = [];

    for (var i = 0; i <= strips.length - 1; i += (props.weight ?? 3)) {
        s.push(strips.slice(i, Math.min(strips.length, i + (props.weight ?? 3))));
    }

    return <>{
        s.map((strip: ReactNode) => {
            return (<div className="strip-even-style">
                {strip}
            </div>)
        })
    }</>
}


function AboutUs() {
    return (
    <div id="about-us">
      <div className="about-us-container-style">
    
          <div className="about-us-header-style">
            About Us
          </div>
          <div className="about-us-text-style">
            Our volunteer mentors are graduates from the world's most prestigious
            CS universities and now work at the biggest tech companies in the world.
          </div>
          <div className="about-us-logo-container-style">
            <img className="about-us-logo-style" src={google} alt="logos" />
            <img className="about-us-logo-style" src={fb} alt="logos" />
            <img className="about-us-logo-style" src={apple} alt="logos" />
            <img className="about-us-logo-style" src={microsoft} alt="logos" />
          </div>
          <div className="about-us-text-style">
            With <span className="bold dark-orange-word">over five years</span> of experience in <span
              className="bold">entrepeneurship,</span> <span className="bold">internships,</span> and <span
              className="bold">full-time jobs,</span> we are excited to help you along your career path!
          </div>
      </div>
    
    
      {/* <div className="volunteers" style={{"textAlign" : "center", "paddingTop" : "10%"}}>
        <div className="section-header white-word">Our Mentors</div>
        <CarouselView />
      </div> */}
    </div>
    );
    }
   
function CarouselView() {
        return (
            <Carousel 
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            dotListClass="custom-dot-list-style">
              <Mentor name="Akshat Prakash" school="CMU SCS 19" desc={[
                "Carnegie Mellon SCS University Honors graduate.",
                "5x time software intern. 2x time teaching assistant.",
                "Microsoft Azure Champion, Tartan Hacks 2019.",
                "Grand Prize Winner, Tartan Hacks 2018.",
                "Represented India @ Taiwan International Science Fair.",
                "Patent @ 16 years old.",
                "Fun fact, I'm an Acapella Artist!"
              ]} pic="akshat.jpg"></Mentor>
              <Mentor name="Ryan Lehman" school="RPI SCS 20" desc={
                ["Graduated Summa Cum Laude from Rensselaer Polytechnic Institute with a major in Computer Science and a minor in Electrical Engineering. I've been able to work for small startups and large enterprise companies with roles encompassing both embedded and software engineering. I'm also a member of YPO Next Generation and involved with multiple REI groups based in the Seattle area."]
              } pic="ryan.jpeg"></Mentor>
              <Mentor name="Namita Dongre" school="CMU SCS 20" desc={
                ["Carnegie Mellon SCS and Tepper Graduate.",
                 "4x teaching assistant for CMU CS Algo classes.",
                 "Grand Prize at CMU Impact-A-Thon.",
                 "2x Best Financial Hack at CMU Tartan Hacks.",
                 "I enjoy the end slices of whole wheat bread!!"
                 ]
              } pic="namita.jpg"></Mentor>
              <Mentor name="Matt Strong" school="CU SCS 21" desc={
                ["Current Senior at the University of Colorado Boulder.",
                "Mentor of several younger university students in robotics.",
                "Robotics Researcher and former SWE Intern at Microsoft.",
                "I've climbed over 10 14ers and the Manitou Incline in under 30 minutes.",
                "Fun fact: I am half Indian!"]
              } pic="matt_strong.png"></Mentor>
            </Carousel>
        )
      }
      
function Mentor(props: any) {
        return (
          <div className="adviser">
            <img className="adviser-image" src={"./images/" + props.pic} alt="profile"></img>
            <div className="adviser-name">
              {props.name}
            </div>
            <div className="adviser-university">
              {props.school}
            </div>
            <p className="adviser-info">
              {props.desc.join('\n')}
            </p>
          </div>
        )
      }
      
function Programone() {
        return (
          
          <div className="mentor-program-container-style" id="the-experience">
            <div className="mentor-program-header-style">
              The Experience
            </div>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-program-section-style mentor-mobile-order-style">
              <div className="mentor-program-section-content-style">
                <div className="mentor-program-section-header-style">
                Become a serial entrepreneur
                </div>
                <div className="mentor-program-section-text-style">
                Rapidly transform multiple ideas into <span className="bold">investor-ready MVPs</span> and diversify the number of startups you create.
                </div>
              </div>
              <img className="mentor-program-section-img-style" src={superhero} alt="down arrow" />
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-program-section-style mentor-mobile-order-style">
              <img className="mentor-program-section-img-style" src={collab} alt="down arrow" />
              <div className="mentor-program-section-content-style">
                <div className="mentor-program-section-header-style">
                Mentor the next generation of high school talent
                </div>
                <div className="mentor-program-section-text-style">
                Inspire and mentor top high school students through quality internship experiences on your startup idea.
                </div>
              </div>
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-program-section-style mentor-mobile-order-style">
              <div className="mentor-program-section-content-style">
                <div className="mentor-program-section-header-style">
                Ideate at no cost and no time
                </div>
                <div className="mentor-program-section-text-style">
                Only at Slingshot, can you transform <b>multiple</b> great ideas into  MVPs with minimal time and 0% financing. 
                </div>
              </div>
              <img className="mentor-program-section-img-style-rev" src={free} alt="down arrow" />
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-program-section-style mentor-mobile-order-style">
              <img className="mentor-program-section-img-style" src={connectglobe} alt="down arrow" />
              <div className="mentor-program-section-content-style">
                <div className="mentor-program-section-header-style">
                Grow your professional network
                </div>
                <div className="mentor-program-section-text-style">
                Brainstorm, collaborate, and innovate with like-minded entrepreneurs. Create a powerful network that will last a lifetime.
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )
      }
      
      class Journey extends Component {
        container = React.createRef();
        state = {
          open: false,
        };
      
        render() {
          return (
            <div className="mentor-journey-container-style" id="how-it-works">
              <div className="mentor-journey-header-style">
                How It Works
              </div>
              <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-journey-section-style mobile-order-style" >
                <img className="mentor-journey-section-img-style-rev" src={join} alt="down arrow" />
                <div className="mentor-journey-section-content-style">
                  <div className="mentor-journey-section-header-style">
                    Join the team
                  </div>
                  <div className="mentor-journey-section-text-style">
                    Schedule an interview&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/Vd5UrA1nFvkRLVhs6">here.</a>
                    &nbsp;Tell us about yourself and learn more about us.
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-journey-section-style mobile-order-style">
                <div className="mentor-journey-section-content-style">
                  <div className="mentor-journey-section-header-style">
                  Brainstorm big ideas
                  </div>
                  <div className="mentor-journey-section-text-style">
                  As a mentor, collaborate with other mentors and ideate the next big thing!
                  </div>
                </div>
                <img className="mentor-journey-section-img-style" src={brainstorm} alt="down arrow" />
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-journey-section-style mobile-order-style">
                <img className="mentor-journey-section-img-style-rev" src={human} alt="down arrow" />
                <div className="mentor-journey-section-content-style">
                  <div className="mentor-journey-section-header-style">
                  Incubate your startup
                  </div>
                  <div className="mentor-journey-section-text-style">
                  Slingshot helps you with crucial business R&D and product design to ensure good idea-market fit.
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-journey-section-style mobile-order-style">
                <div className="mentor-journey-section-content-style">
                  <div className="mentor-journey-section-header-style">
                  Mentor like a tech PM
                  </div>
                  <div className="mentor-journey-section-text-style">
                  For no more than 1-2 hours a week, mentor highly skilled HS students on your idea to bring it to life.
                  </div>
                </div>
                <img className="mentor-journey-section-img-style" src={phone} alt="down arrow" />
              </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-journey-section-style mobile-order-style">
              <img className="mentor-journey-section-img-style-rev" src={catapulting} alt="down arrow" />
              <div className="mentor-journey-section-content-style">
                <div className="mentor-journey-section-header-style">
                Slingshot your Startup
                </div>
                <div className="mentor-journey-section-text-style">
                Take your idea to the next level by launching it into a fully-fledged startup.
                </div>
              </div>
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="mentor-journey-section-style mobile-order-style">
              <div className="mentor-journey-section-content-style">
                <div className="mentor-journey-section-repeat-header-style">
                And Repeat!
                </div>
                <div className="mentor-journey-section-repeat-text-style">
                Allow yourself to build a diverse portfolio of high-potential startups by continuing to innovate on more ideas.
                <div className="minimal">
                  Minimal time. Zero cost.<br />
                  Infinite possibilities.
                </div>
                </div>
              </div>
            </ScrollAnimation>
            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/irMjdW8iLdZsKNVWA">
              <button className="mentor-journey-apply-style">JOIN TODAY</button>
            </a>
            </div>
          )
        }
      }
      
function Programtwo() {
        return (
          
          <div className="program-container-style" id="program">
            <div className="program-header-style">
              Our Program
            </div>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="program-section-style mobile-order-style">
              <div className="program-section-content-style">
                <div className="program-section-header-style">
                  Experience an industry level internship at Slingcubator
                </div>
                <div className="program-section-text-style">
                  During your internship, we match you with a high-tech 
                  startup at Slingshot's startup incubator where you gain a unique experience 
                  under the guidance of our mentors.
                </div>
              </div>
              <img className="program-section-img-style" src={collab} alt="down arrow" />
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="program-section-style mobile-order-style">
              <img className="program-section-img-style-rev" src={colleges} alt="down arrow" />
              <div className="program-section-content-style">
                <div className="program-section-header-style">
                  Slingshot your college app and impress the top CS schools
                </div>
                <div className="program-section-text-style">
                  Make your college apps stand out by working with our 
                  mentors to learn problem solving and leadership 
                  skills that many of the top universities look for.
                </div>
              </div>
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="program-section-style mobile-order-style">
              <div className="program-section-content-style">
                <div className="program-section-header-style">
                  Learn from our expert mentors, <br className="mobile-remove"/>at no cost
                </div>
                <div className="program-section-text-style">
                  We know how expensive programming 
                  summer camps are. Our volunteer mentors are here to 
                  provide expert mentorship to you <b>at no cost.</b> 
                </div>
              </div>
              <img className="program-section-img-style" src={free} alt="down arrow" />
            </ScrollAnimation>
      
            <ScrollAnimation animateIn="fadeIn" duration={1.5} className="program-section-style mobile-order-style">
              <img className="program-section-img-style-rev" src={globe} alt="down arrow" />
              <div className="program-section-content-style">
                <div className="program-section-header-style">
                  Join our global family of makers, <br className="mobile-remove"/>hustlers and innovators
                </div>
                <div className="program-section-text-style">
                  Slingshot is a global community of the top 
                  high school students and incredibly 
                  entrepreneurial mentors. <a href="https://forms.gle/uRgNmiKjkY5ysKi89">Apply</a> today and be a part of this slingtastic network!
                </div>
              </div>
            </ScrollAnimation>
          </div>
        )
      }
      
class Slider extends Component<any, State> {
        constructor(props : any) {
            super(props);
            const init = window.innerHeight;
            const padding = 0.3*init;
    
            this.state = {
              height: init,
              initHeight: init,
              finalHeight: 0,
              styles: {"paddingTop" : padding}
            };
        }
    
        hideSlider () {
            const elem = document.getElementById("slider");
            if (elem) {
                elem.style.display = "none";
            }
        }
    
        componentDidMount(){
            setTimeout(() => {
                const { height, initHeight, finalHeight } = this.state;
                this.setState({
                    height: height === finalHeight ? initHeight : finalHeight
                });
            }, 6800);
        }
    
        render () {
            return (
            <div className="slider-style" id="slider">
                <AnimateHeight
                  duration={ 500 }
                  height={ this.state.height }
                >
                    <button onClick={this.hideSlider.bind(this)}>
                        <i className="material-icons">close_fullscreen</i>
                    </button>
                    <div className="slider-content-style" style={this.state.styles}>                    
                        <span>Let's build something </span>
                        <Typist>
                                <span> <b>innovative.</b></span>
                                <Typist.Backspace count={12} delay={400} />
                                <span> <b> meaningful.</b></span>
                                <Typist.Backspace count={12} delay={400} />
                                <span> <b>awesome.</b> Together.</span>
                        </Typist>
                    </div>
    
                </AnimateHeight>
              </div>
            );
        }
    }

function Mentoring() {
        return (
          <div>
            <Navbar />
            <MentorIntro />
            <div className="gray-background-style">
              <Become />
              <HowItWorks />
            </div>
            <Experience />
            <FooterWrapper />
          </div>
        )
      }
      
     
export {StripEven, StripExt,Section,PeopleCard, Modal,Logo, Card,TextInput,AboutUs,CarouselView,Mentor,Programone,Journey, Programtwo,Slider, Mentoring};