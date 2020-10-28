import React from "react";
import free from "./images/free.png"
import collab from "./images/collab.png"
import superhero from "./images/superhero.png"
import connectglobe from "./images/connectearth.png"

import ScrollAnimation from 'react-animate-on-scroll';

import "./Experience.scss";

function Program() {
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

export default Program;
