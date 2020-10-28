import React from "react";
import colleges from "./images/colleges.png"
import collab from "./images/collab.png"
import free from "./images/free.png"
import globe from "./images/globe.png"

import ScrollAnimation from 'react-animate-on-scroll';

import "./Program.scss";

function Program() {
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

export default Program;
