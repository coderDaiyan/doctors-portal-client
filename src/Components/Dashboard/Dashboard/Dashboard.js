import moment from "moment";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "../../Shared/Calendar/Calendar.css";
import AppointmentsByDate from "../AppointmentsByDate/AppointmentsByDate";
import Sidebar from "../Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  console.log(selectedDate);
  const [appointmentsByDate, setAppointmentsByDate] = useState([]);
  const handleDateChange = (date) => {
    const formattedDate = moment(date).format("LL");
    setSelectedDate(formattedDate);

    console.log(selectedDate);
  };

  useEffect(() => {
    fetch("http://localhost:5000/appointmentsByDate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selectedDate }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAppointmentsByDate(data);
      });
  }, [selectedDate]);

  return (
    <section>
      <div className="row">
        <div className="sidebar">
          <div className="col-md-2">
            <Sidebar />
          </div>
        </div>
        <div className="main_content">
          <div className="col-md-4 me-5">
            <Calendar
              className="calendar__section dashboard_calendar"
              onChange={handleDateChange}
              value={new Date()}
            />
          </div>
          <div className="col-md-6">
            <AppointmentsByDate
              selectedDate={selectedDate}
              appointments={appointmentsByDate}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
