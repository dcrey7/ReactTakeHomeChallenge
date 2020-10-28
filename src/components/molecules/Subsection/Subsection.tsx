import React, { ReactNode } from "react";
import "./Subsection.scss";

type SubsectionProps = {
    children?: ReactNode;
    title: string;
    maxWidth?: string;
}

type SubsectionDescProps = {
    children?: ReactNode;
}

type SubsectionListItemProps = {
    children?: ReactNode;
    faIcon?: string;
    link?: Array<string>; // [label, link]
}

function Subsection(props: SubsectionProps) {
    return (
        <div className="subsection-style" style={{ maxWidth: props.maxWidth ?? "100%"}}>
            <div className="subsection-title-style">
                {props.title}
            </div>            
            {props.children}
        </div>
    )
}

function SubsectionDesc(props: SubsectionDescProps) {
    return (
        <div className="subsection-desc-style">
            {props.children}
        </div>
    )
}

function SubsectionListItem(props: SubsectionListItemProps) {
    return (
        <div className="subsection-list-item-style">
            <i className={props.faIcon} aria-hidden="true" />
            <a href={props.link ? props.link[1] : ""}>{props.link ? props.link[0] : ""}</a>
        </div>
    )
}

export {Subsection, SubsectionDesc, SubsectionListItem};