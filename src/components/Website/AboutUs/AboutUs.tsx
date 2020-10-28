import React from "react";
import google from "./images/Google.png"
import fb from "./images/FB.png"
import apple from "./images/Apple.png"
import microsoft from "./images/Microsoft.png"

import "./AboutUs.scss"

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

export default AboutUs;