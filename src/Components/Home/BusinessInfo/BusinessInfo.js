import {
  faClock,
  faMapMarkerAlt,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InfoCard from "../InfoCard/InfoCard";

const BusinessInfo = () => {
  const infoData = [
    {
      title: "Opening Hours",
      description: "We are open for 24/7 Hours",
      icon: faClock,
      background: "#19D3B2",
    },
    {
      title: "Visit our Location",
      description: "Broklyn, NY 100036, United States",
      icon: faMapMarkerAlt,
      background: "#3A4256",
    },
    {
      title: "Contact Us now",
      description: "+000 123 45678",
      icon: faPhoneAlt,
      background: "#19D3B2",
    },
  ];
  return (
    <section data-aos="fade-up" className="row d-flex justify-content-center">
      {infoData.map((info) => (
        <InfoCard info={info} />
      ))}
    </section>
  );
};

export default BusinessInfo;
