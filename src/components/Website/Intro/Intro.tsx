import React from "react";
import bulb from "./images/bulb.png"

import "./Intro.scss";

function Intro() {
  return (
    <div className="intro-container-style" id="intro">
      <div className="intro-content-style">
        <div className="intro-header-style">
          Looking to get into the <span className="bold">top CS colleges?</span>
        </div>
        <div className="intro-text-style">
          Slingshot your college app a league ahead while being mentored and 
          <span className="orange-word bold"> interning </span>
          on the <span className="bold"> next big thing</span> at Slingshot's startup
          <span className="blue-word bold"> Slingcubator</span>! 
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">
          <button className="intro-apply-style" >APPLY NOW</button>
        </a>
      </div>
      <img className="intro-image-style" src={bulb} alt="down arrow" />
    </div>
  )
}

export default Intro;