import React from "react";
import Calendar from "react-calendar";
import ChairBG from "../../../assets/images/header-bg.png";
import "../../Shared/Calendar/Calendar.css";

const AppointmentHeader = ({ handleDateChange }) => {
  return (
    <main
      style={{ height: "600px", width: "1232px" }}
      className="row d-flex align-items-center main-heder"
    >
      <div className="col-md-4 offset-md-1">
        <h1 className="fw-bold">Appointment</h1>
        <div className="calendar__section">
          <Calendar onChange={handleDateChange} value={new Date()} />
        </div>
      </div>
      <div className="col-md-6">
        <img src={ChairBG} className="img-fluid" alt="" />
      </div>
    </main>
  );
};

export default AppointmentHeader;
