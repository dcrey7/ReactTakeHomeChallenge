import React, {Component} from "react";
import './Journey.scss';

import resume from "./images/resume.png"
import rocket from "./images/rocket.png"
import human from "./images/human-flag.png"
import phone from "./images/trophy-phone.png"
// import feet from "./images/feet.png"

import ScrollAnimation from 'react-animate-on-scroll';

class Journey extends Component {
  container = React.createRef();
  state = {
    open: false,
  };

  render() {
    return (

      <div className="journey-container-style" id="journey">
        <div className="journey-header-style">
          Your Journey
        </div>
        <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style" >
          {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
            <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(100deg)' }} />
          </ScrollAnimation> */}

          <img className="journey-section-img-style" src={resume} alt="down arrow" />
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Apply
              </div>
            <div className="journey-section-text-style">
              Apply using this&nbsp;
                <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">form</a>!
                &nbsp;<br />
                We'll get back if we think you'd be a great fit and set up an interview.
              </div>

          </div>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
          <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(120deg)' }} />
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style">
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Project Match
            </div>
            <div className="journey-section-text-style">
              Next, we’ll match you with one of the internship projects in Slingshot's startup Slingcubator!
            </div>
          </div>
          <img className="journey-section-img-style" src={rocket} alt="down arrow" />
          {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
            <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(200deg)' }} />
          </ScrollAnimation> */}
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
          <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(220deg)' }} />
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style">

          {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
            <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(140deg)' }} />
          </ScrollAnimation> */}

          <img className="journey-section-img-style" src={human} alt="down arrow" />
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Create Impact
            </div>
            <div className="journey-section-text-style">
              Take ownership, learn, and make impactful contributions to a real-world startup.
            </div>
          </div>
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
          <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(180deg)' }} />
        </ScrollAnimation> */}


        <ScrollAnimation animateIn="fadeIn" duration={1.5} className="journey-section-style mobile-order-style">
          <div className="journey-section-content-style">
            <div className="journey-section-header-style">
              Impress your dream schools!
            </div>
            <div className="journey-section-text-style">
              Showcase your work experience and demonstrate strong interest in CS
              to your dream schools.
            </div>
          </div>
          <img className="journey-section-img-style" src={phone} alt="down arrow" />
        </ScrollAnimation>

        {/* <ScrollAnimation animateIn="fadeIn" duration={4} delay={300}>
          <img alt="feet" width="100" height="100" src={feet} style={{ transform: 'rotate(180deg)' }} />
        </ScrollAnimation> */}

        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">
          <button className="journey-apply-style">APPLY NOW</button>
        </a>
      </div>
    )
  }
}

export default Journey;