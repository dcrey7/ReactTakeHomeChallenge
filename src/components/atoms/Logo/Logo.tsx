import React from "react";
import {animateScroll as scroll} from "react-scroll";

import "./Logo.scss"

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

export default Logo;
