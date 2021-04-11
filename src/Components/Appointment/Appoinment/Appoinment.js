import React, { useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import AppointmentHeader from "../AppointmentHeader/AppointmentHeader";
import BookAppointment from "../BookAppointment/BookAppointment";

const Appoinment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };
  return (
    <>
      <Navbar />
      <AppointmentHeader handleDateChange={handleDateChange} />
      <BookAppointment
        handleDateChange={handleDateChange}
        selectedDate={selectedDate}
      />
      <Footer />
    </>
  );
};

export default Appoinment;
