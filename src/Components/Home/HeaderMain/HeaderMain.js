import React from "react";
import ChairBG from "../../../assets/images/header-bg.png";
import "./HeaderMain.css";

const HeaderMain = () => {
  return (
    <main
      data-aos="zoom-in"
      style={{ height: "600px", width: "1232px" }}
      className="row d-flex align-items-center main-heder"
    >
      <div className="col-md-4 offset-md-1">
        <h1 className="fw-bold">
          Your New Smile <br /> Starts Here
        </h1>
        <p className="text-secondary">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quos
          at pariatur quaerat consequatur labore.
        </p>
        <button
          style={{ background: "var(--gradient-color)" }}
          className="btn appointment-btn text-white"
        >
          Get Appointment
        </button>
      </div>
      <div className="col-md-6">
        <img src={ChairBG} className="img-fluid" alt="" />
      </div>
    </main>
  );
};

export default HeaderMain;
