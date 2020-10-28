import React from "react";
import Card from "../../atoms/Card/Card";
import "./PeopleCard.scss";
import picture from "./images/profile.png";
import close from "../../../images/close.png";

type Props = {
  key?: number;
  name: string;
  email: string;
  img?: string;
  status?: boolean;
  onClose: (key: string) => void;
};

function PeopleCard(props: Props) {
  const status = props.status
    ? "Status: Accepted Invite"
    : "Status: Pending Invite";

  const onCloseCard = () => {
    props.onClose(props.email);
  };

  return (
    <Card onClick={onCloseCard} buttonImageURI={close}>
      <div className="people-card">
        <div className="people-card-img">
          <img alt="user profile" src={props.img ?? picture} />
        </div>
        <div className="people-card-name">{props.name}</div>
        <div className="people-card-description">{props.email}</div>
        {props.status != null && (
          <div className="people-card-status">{status}</div>
        )}
      </div>
    </Card>
  );
}

export default PeopleCard;
