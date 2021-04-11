import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section data-aos="zoom-in-right" className="contact__section">
        <h3
          className="fw-bold"
          style={{ color: "var(--text-color-green)", textAlign: "center" }}
        >
          CONTACT US
        </h3>
        <h1 className="text-center text-white mb-5">Always Connect with US</h1>
        <div className="form">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="emailInput"
              placeholder="Email*"
            />
          </div>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="subjectInput"
              placeholder="Subject*"
            />
          </div>
          <div class="mb-3">
            <textarea
              style={{ resize: "none" }}
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
              placeholder="Your Message*"
            ></textarea>
          </div>{" "}
          <br />
          <div className="d-flex justify-content-center align-items-center">
            <button
              style={{ background: "var(--gradient-color)", width: "180px" }}
              className="btn text-white"
            >
              SUBMIT
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
