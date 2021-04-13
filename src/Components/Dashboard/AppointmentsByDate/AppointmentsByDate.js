import moment from "moment";
import React from "react";
import "./AppointmentsByDate.css";

const AppointmentsByDate = ({ appointments, selectedDate }) => {
  console.log(appointments);
  return (
    <div>
      {appointments.length > 0 ? (
        <div className="appointments">
          <div className="d-flex justify-content-between">
            <h5 style={{ color: "var(--text-color-green)" }} className="p-3">
              Appointments
            </h5>
            <p className="mt-3 me-3 text-secondary">
              {moment(selectedDate).format("LL")}
            </p>
          </div>
          <table class="table table-borderless table_section">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Schedule</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <>
                  <tr>
                    <td>{appointment.name}</td>
                    <td>{moment(selectedDate).format("LT")}</td>
                    <td>
                      <select
                        style={{ marginTop: "-6px" }}
                        class="form-select w-75"
                        aria-label="Default select example"
                      >
                        <option value="Visited">Visited</option>
                        <option value="Not Visited">Not Visited</option>
                      </select>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="">
          <h1>No Appointments!</h1>
        </div>
      )}
    </div>
  );
};

export default AppointmentsByDate;
