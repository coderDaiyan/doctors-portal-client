import moment from "moment";
import React from "react";
import BookAppointmentCard from "../BookAppointmentCard/BookAppointmentCard";

const BookAppointment = ({ selectedDate }) => {
  const bookingData = [
    {
      subject: "Teeth Orthodontics",
      visitingHour: "8.00 AM - 9.00 AM",
      totalSits: "10",
    },
    {
      subject: "Cosmetic Dentistry",
      visitingHour: "8.00 AM - 9.00 AM",
      totalSits: "10",
    },
    {
      subject: "Teeth Cleaning",
      visitingHour: "8.00 AM - 9.00 AM",
      totalSits: "10",
    },
    {
      subject: "Teeth Orthodontics",
      visitingHour: "8.00 AM - 9.00 AM",
      totalSits: "10",
    },
    {
      subject: "Teeth Orthodontics",
      visitingHour: "8.00 AM - 9.00 AM",
      totalSits: "10",
    },
    {
      subject: "Teeth Orthodontics",
      visitingHour: "8.00 AM - 9.00 AM",
      totalSits: "10",
    },
  ];
  return (
    <section className="booking_appointment__section mt-5">
      <h2
        style={{ color: "var(--text-color-green)" }}
        className="text-center fw-bold"
      >
        Available Appointments On {moment(selectedDate).format("LL")}
      </h2>{" "}
      <br />
      <br />
      <div className="row d-flex justify-content-center align-items-center">
        {bookingData.map((booking) => (
          <BookAppointmentCard booking={booking} />
        ))}
      </div>
    </section>
  );
};

export default BookAppointment;
