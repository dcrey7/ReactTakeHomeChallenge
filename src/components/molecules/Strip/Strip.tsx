import React, { ReactNode, ReactNodeArray } from "react";
import "./Strip.scss";

type Props = {
    children?: ReactNode;
    weight?: number;
}

function StripExt(props: Props) {
    return (
        <div className="strip-ext-style">
            {props.children}
        </div>
    )
}

function StripEven(props: Props) {
    const strips: ReactNodeArray = React.Children.toArray(props.children);
    var s: ReactNodeArray = [];

    for (var i = 0; i <= strips.length - 1; i += (props.weight ?? 3)) {
        s.push(strips.slice(i, Math.min(strips.length, i + (props.weight ?? 3))));
    }

    return <>{
        s.map((strip: ReactNode) => {
            return (<div className="strip-even-style">
                {strip}
            </div>)
        })
    }</>
}

export {StripEven, StripExt};