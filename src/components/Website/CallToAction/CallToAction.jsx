import React, {Component} from "react";
import './CallToAction.scss';
import '../Journey/Journey.scss'

class CallToAction extends Component {
  
    render() {
      return (
        <div className="call-to-action-component journey-container-style">
            <div className="call-to-action-section-header-style">
                Are you ready to slingshot ahead?    
            </div>  
            <div className="call-to-action-section-text-style">
                The only requirements<br />
                Passion, problem solving skills, and 12 weeks    
            </div>    
           <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/XrtjBEnuRacLgyqh7">
            <button className="call-to-action-button journey-apply-style">APPLY NOW</button>
          </a>
        </div>
      )
    }
  }
  
  export default CallToAction;