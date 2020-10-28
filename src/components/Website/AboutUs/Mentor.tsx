import React from "react";
import './AboutUs.scss';

function Mentor(props: any) {
  return (
    <div className="adviser">
      <img className="adviser-image" src={"./images/" + props.pic} alt="profile"></img>
      <div className="adviser-name">
        {props.name}
      </div>
      <div className="adviser-university">
        {props.school}
      </div>
      <p className="adviser-info">
        {props.desc.join('\n')}
      </p>
    </div>
  )
}

export default Mentor;