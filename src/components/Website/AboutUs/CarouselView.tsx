import Carousel from "react-multi-carousel";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Mentor from "./Mentor";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function CarouselView() {
  return (
      <Carousel 
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      dotListClass="custom-dot-list-style">
        <Mentor name="Akshat Prakash" school="CMU SCS 19" desc={[
          "Carnegie Mellon SCS University Honors graduate.",
          "5x time software intern. 2x time teaching assistant.",
          "Microsoft Azure Champion, Tartan Hacks 2019.",
          "Grand Prize Winner, Tartan Hacks 2018.",
          "Represented India @ Taiwan International Science Fair.",
          "Patent @ 16 years old.",
          "Fun fact, I'm an Acapella Artist!"
        ]} pic="akshat.jpg"></Mentor>
        <Mentor name="Ryan Lehman" school="RPI SCS 20" desc={
          ["Graduated Summa Cum Laude from Rensselaer Polytechnic Institute with a major in Computer Science and a minor in Electrical Engineering. I've been able to work for small startups and large enterprise companies with roles encompassing both embedded and software engineering. I'm also a member of YPO Next Generation and involved with multiple REI groups based in the Seattle area."]
        } pic="ryan.jpeg"></Mentor>
        <Mentor name="Namita Dongre" school="CMU SCS 20" desc={
          ["Carnegie Mellon SCS and Tepper Graduate.",
           "4x teaching assistant for CMU CS Algo classes.",
           "Grand Prize at CMU Impact-A-Thon.",
           "2x Best Financial Hack at CMU Tartan Hacks.",
           "I enjoy the end slices of whole wheat bread!!"
           ]
        } pic="namita.jpg"></Mentor>
        <Mentor name="Matt Strong" school="CU SCS 21" desc={
          ["Current Senior at the University of Colorado Boulder.",
          "Mentor of several younger university students in robotics.",
          "Robotics Researcher and former SWE Intern at Microsoft.",
          "I've climbed over 10 14ers and the Manitou Incline in under 30 minutes.",
          "Fun fact: I am half Indian!"]
        } pic="matt_strong.png"></Mentor>
      </Carousel>
  )
}

export default CarouselView;
