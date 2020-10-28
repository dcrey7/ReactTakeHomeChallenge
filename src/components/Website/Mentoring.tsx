import React from "react";
import Experience from "./Experience/Experience";
import MentorIntro from "./Mentoring/Mentor_Intro";
import HowItWorks from "./HowItWorks/HowItWorks";
import Become from "./Become/Become";
import FooterWrapper from "./Mentoring/footer";
import Navbar from "./Mentoring/Navbar";

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

export default Mentoring;