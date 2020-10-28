import React, { Component }  from "react";
import './Become.scss';

class Become extends Component {
    render() {
      return (
        <div className="mentor-call-to-action-component">
            <div className="mentor-call-to-action-section-header-style">
              Become a Serial Entrepreneur 
            </div>  

            <div className="mentor-call-to-action-section-text-style">
            At Slingshot, brainstorm and collaborate on <span className="orange-text">new ideas</span>,<span className="green-text"> diversify your 
            startup portfolio</span>, and build <span className="yellow-text">investor-ready ventures</span> as you inspire the 
            next generation of high school leaders.    
            </div>
            <div className="mentor-call-to-action-section-subtext-style">
              For no cost & no more than 3 hours a week!   
            </div>    
           <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/irMjdW8iLdZsKNVWA">
            <button className="mentor-call-to-action-button">JOIN TODAY</button>
          </a>
        </div>
      )
    }
  }
  
  export default Become;