import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Doctor from "../../../assets/images/doctor.png";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import "./Doctors.css";

const Doctors = () => {
  const doctorsData = [
    {
      name: "Dr. Caudi",
      phone: "+110 223 445 667",
      icon: faPhoneAlt,
      img: Doctor,
    },
    {
      name: "Dr. Caudi",
      phone: "+110 223 445 667",
      icon: faPhoneAlt,
      img: Doctor,
    },
    {
      name: "Dr. Caudi",
      phone: "+110 223 445 667",
      icon: faPhoneAlt,
      img: Doctor,
    },
  ];
  return (
    <section data-aos="zoom-in-up" className="doctors__section">
      <h4
        className="text-center fw-bold"
        style={{ color: "var(--text-color-green)" }}
      >
        Our Doctors
      </h4>
      <div className="row d-flex justify-content-center align-items-center">
        {doctorsData.map((doctor) => (
          <DoctorsCard doctor={doctor} />
        ))}
      </div>
    </section>
  );
};

export default Doctors;
