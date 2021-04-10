import React from "react";
import Doctor from "../../../assets/images/doctor.png";
import "./MakeAppoinment.css";

const MakeAppoinment = () => {
  return (
    <section data-aos="zoom-in" className="appoinment__section">
      <div className="row">
        <div className="col-md-4">
          <img className="doctor" src={Doctor} alt="" />
        </div>
        <div className="col-md-8">
          <div className="p-5" style={{ marginLeft: "170px" }}>
            <h5
              style={{ color: "var(--text-color-green)" }}
              className="text-uppercase"
            >
              Appointment
            </h5>{" "}
            <br />
            <h1 className="text-white">
              Make an Appoinment <br /> Today
            </h1>
            <p style={{ fontSize: "1.3rem", color: "white" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, odio
              libero optio incidunt eius adipisci!
            </p>
            <br />
            <br />
            <button
              style={{ background: "var(--gradient-color)", color: "white" }}
              className="btn btn-lg"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppoinment;
