import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./DoctorsCard.css";

const DoctorsCard = ({ doctor }) => {
  const { name, phone, icon, img } = doctor;
  return (
    <div className="doctors__card col-md-3">
      <img className="img-fluid mb-3" src={img} alt="" />
      <div className="text-center">
        <h2 className="fw-bold">{name}</h2>
        <p>
          <FontAwesomeIcon className="me-3" icon={icon} />
          {phone}
        </p>
      </div>
    </div>
  );
};

export default DoctorsCard;
