import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact__section">
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
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
              placeholder="Your Message*"
            ></textarea>
          </div>{" "}
        </div>
      </section>
    </>
  );
};

export default Contact;
