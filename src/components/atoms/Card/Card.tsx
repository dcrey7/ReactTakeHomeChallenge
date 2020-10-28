import React, { ReactNode } from "react";
import "./Card.scss";

type Props = {
  children?: ReactNode;
  buttonImageURI?: string;
  onClick?: () => void;
};

function Card(props: Props) {
  const onClickCard = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    if (props.onClick) {
      props.onClick();
    }
    e.preventDefault();
  };

  return (
    <div className="card-container-style">
      <div className="card-header">
        <img
          alt="button icon"
          src={props.buttonImageURI}
          onClick={onClickCard}
          style={{cursor: "pointer"}}
        />
      </div>
      {props.children}
    </div>
  );
}

export default Card;
