import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  const { title, description, icon, background } = info;
  return (
    <div
      style={{ backgroundColor: background }}
      className="col-sm-12 col-md-3 info__card"
    >
      <div className="d-flex justify-content-evenly align-items-center">
        <div className="icon">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="">
          <h6>{title}</h6>
          <small>{description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
