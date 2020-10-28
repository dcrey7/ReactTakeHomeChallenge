import React, { ReactNode } from "react";
import "./Section.scss";

import plus from "./images/plus.png";

type Props = {
  children?: ReactNode;
  title?: string;
  breadCrumb?: Array<Array<any>>; // array of string: navigationAction

  actionPrompt?: string;
  onAction?: (...key: any) => void;
  link?: Array<string>; // [label, link]
};

function Section(props: Props) {
 
  const onAction = () => {
    if (props.onAction) {
        props.onAction();
    }
  };

  return (
      <div className="section-container-style">
          <div className="section-banner-style">
            <div className="section-title-style">
                {props.title ? 
                    <div className="title-style">
                    {props.title}
                    </div> : props.breadCrumb ? 
                    <div className="breadcrumb-style">
                        {props.breadCrumb.map((entry: any, index: Number) => {
                            if (props.breadCrumb === undefined) {
                                return <div />
                            } else if (index !== props.breadCrumb?.length - 1) {
                                return <div key={entry[0]} onClick={entry[1]} className="link-style">{entry[0]} &#62;</div>
                            } else {
                                return <div key={entry[0]} onClick={entry[1]} className="link-style">{entry[0]}</div>
                            }
                        })}
                    </div> :
                    <div></div>
                }
                
                {props.actionPrompt ?
                <div className="action-style" onClick={onAction}>
                    <img alt="plus" src={plus}/>
                    {props.actionPrompt}
                </div> : <a href={props.link ? props.link[1] : ""}>{props.link ? props.link[0] : ""}</a>}
            </div>
            <hr className="section-banner-divider-style" />
          </div>
          <div className="section-body-style">
            {props.children}
          </div>
      </div>
  );
}

export default Section;
