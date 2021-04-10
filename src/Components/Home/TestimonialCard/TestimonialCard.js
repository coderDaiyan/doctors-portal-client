import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ testimonial }) => {
  const { name, img, feedback, city } = testimonial;
  return (
    <div className="testimonial__card col-md-4">
      <p>{feedback}</p>
      <br />
      <div className="d-flex justify-content-center align-items-center me-5">
        <img src={img} alt="" className="img-fluid me-3 mt-3" />
        <h6 className="fw-bold " style={{ color: "var(--text-color-green)" }}>
          {name}
        </h6>
      </div>
      <p style={{ marginLeft: "102px", marginTop: "-12px" }}>{city}</p>
    </div>
  );
};

export default TestimonialCard;
