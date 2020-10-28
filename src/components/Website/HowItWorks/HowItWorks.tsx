import React, {Component} from "react";
import './HowItWorks.scss';

// import resume from "./images/resume.png"
// import rocket from "./images/rocket.png"
import human from "./images/human.png"
import catapulting from "./images/catapulting.png"
import phone from "./images/trophy-phone.png"
import join from "./images/join.png"
import brainstorm from "./images/brainstorm.png"
// import feet from "./images/feet.png"

import ScrollAnimation from 'react-animate-on-scroll';

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

export default Journey;