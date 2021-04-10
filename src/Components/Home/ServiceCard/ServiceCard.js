import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service }) => {
  const { title, description, img } = service;
  return (
    <div className="service__card col-md-4">
      <img src={img} alt="" className="img-fluid" />
      <h4>{title}</h4>
      <small>{description}</small>
    </div>
  );
};

export default ServiceCard;
