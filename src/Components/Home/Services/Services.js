import React from "react";
import Cavity from "../../../assets/images/cavity.png";
import Fluoride from "../../../assets/images/fluoride.png";
import Tooth from "../../../assets/images/tooth.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";

const Services = () => {
  const serviceData = [
    {
      title: "Fluoride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste officiis vel autem nemo iusto corporis omnis itaque nam adipisci.",
      img: Fluoride,
    },
    {
      title: "Cavity Filling",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste officiis vel autem nemo iusto corporis omnis itaque nam adipisci.",
      img: Cavity,
    },
    {
      title: "Teeth Whitening",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iste officiis vel autem nemo iusto corporis omnis itaque nam adipisci.",
      img: Tooth,
    },
  ];
  return (
    <section data-aos="zoom-in" className="services-container">
      <div className="text-center">
        <h5 style={{ color: "var(--text-color-green)" }}>OUR SERVICES</h5>
        <h2 className="fw-bold" style={{ color: "var(--text-color-dark)" }}>
          Services we Provide
        </h2>
      </div>
      <div className="row text-center d-flex justify-content-center align-items-center">
        {serviceData.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
