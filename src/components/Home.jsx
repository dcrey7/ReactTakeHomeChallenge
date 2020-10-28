import React from "react";
import Program from "./Website/Program/Program";
import Intro from "./Website/Intro/Intro";
import Journey from "./Website/Journey/Journey";
import { Slider } from "./Website/Slider/Slider";
import CallToAction from "./Website/CallToAction/CallToAction";
import AboutUs from "./Website/AboutUs/AboutUs";
import NavbarWrapper from "./atoms/Navbar/Navbar";
import FooterWrapper from "./atoms/Footer/footer";

import "./App.scss";

function Home() {
  return (
    <div>
      <NavbarWrapper />
      <Slider />
      <Intro />
      <div className="gray-background-style">
        <Program />
        <CallToAction />
        <AboutUs />
        <Journey />
      </div>
      <FooterWrapper />
    </div>
  );
}

export default Home;
