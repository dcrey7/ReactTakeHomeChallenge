import React from "react";
import bulb from "./images/Dream.png"

import "./Mentor_Intro.scss";

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

export default Intro;