import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import swal from "sweetalert";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const AppointmentForm = ({
  modalIsOpen,
  closeModal,
  subject,
  selectedDate,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.service = subject;
    data.date = selectedDate;
    data.created = moment(selectedDate).format("LL");
    fetch("http://localhost:5000/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((success) => {
        if (success) {
          swal(
            "Success!",
            `You booked an appointment on ${data.service}!`,
            "success"
          );
          closeModal();
        }
      });
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {" "}
        <h3
          style={{ color: "var(--text-color-green)" }}
          className="text-center"
        >
          {subject}
        </h3>{" "}
        <h5 className="text-center">
          Date: {moment(selectedDate).format("LL")}
        </h5>
        <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
          <input
            className="form-control"
            style={{ width: "500px" }}
            placeholder="Name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">This field is required</span>
          )}
          <br />
          <input
            className="form-control"
            style={{ width: "500px" }}
            placeholder="Phone Number"
            {...register("phoneNumber", { required: true })}
          />
          {errors.phoneNumber && (
            <span className="text-danger">This field is required</span>
          )}{" "}
          <br />
          <input
            className="form-control"
            style={{ width: "500px" }}
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-danger">This field is required</span>
          )}{" "}
          <br />
          <div className="row">
            <div className="col-md-6">
              <select
                style={{ width: "200px" }}
                class="form-select "
                aria-label="Default select example"
                {...register("gender", { required: true })}
              >
                <option disabled={true} selected>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              {errors.gender && (
                <span className="text-danger">This field is required</span>
              )}{" "}
            </div>
            <div className="col-md-6">
              <input
                className="form-control"
                style={{ width: "200px" }}
                placeholder="Weight"
                {...register("weight", { required: true })}
              />
              {errors.weight && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
          </div>
          <br /> <br />
          <input
            className="btn text-white"
            style={{ background: "var(--gradient-color)" }}
            type="submit"
          />{" "}
        </form>
      </Modal>
    </>
  );
};

export default AppointmentForm;
