import React from "react";
import AppointmentForm from "../AppointmentForm/AppointmentForm";
import "./BookAppointmentCard.css";

const BookAppointmentCard = ({ booking }) => {
  const { subject, visitingHour, totalSits } = booking;

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="booking_card col-md-4 mb-5">
      <div className="card p-3">
        <h3
          className="card-title text-brand"
          style={{ color: "var(--text-color-green)" }}
        >
          {subject}
        </h3>
        <h5>{visitingHour}</h5>
        <h6>{totalSits} Sits Available</h6>
        <button
          onClick={openModal}
          style={{ background: "var(--gradient-color)", color: "white" }}
          className="btn"
        >
          Book Appointment
        </button>
        <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default BookAppointmentCard;
