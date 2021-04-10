import React from "react";
import People1 from "../../../assets/images/people-1.png";
import People2 from "../../../assets/images/people-2.png";
import People3 from "../../../assets/images/people-3.png";
import Quote from "../../../assets/images/quote.svg";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import "./Testimonial.css";

const Testimonial = () => {
  const testimonialData = [
    {
      name: "Winson Harry",
      city: "California",
      feedback:
        "It is a long established fact that by the readable content of a lot layout.The point of using Lorem a more-or-less normal distribu to using Content here content",
      img: People1,
    },
    {
      name: "Winson Harry",
      city: "California",
      feedback:
        "It is a long established fact that by the readable content of a lot layout.The point of using Lorem a more-or-less normal distribu to using Content here content",
      img: People2,
    },
    {
      name: "Winson Harry",
      city: "California",
      feedback:
        "It is a long established fact that by the readable content of a lot layout.The point of using Lorem a more-or-less normal distribu to using Content here content",
      img: People3,
    },
  ];
  return (
    <section data-aos="zoom-in" className="testimonial__section">
      <div className="d-flex justify-content-between">
        <div className="">
          <h5
            style={{ color: "var(--text-color-green)" }}
            className="text-uppercase fw-bold"
          >
            Testimonial
          </h5>
          <h1 className="fw-bold">
            What our Patients <br /> Say
          </h1>
        </div>
        <div className="">
          <img className="quote" src={Quote} alt="" />
        </div>
      </div>
      <div className="mt-5 row d-flex justify-content-center align-items-center">
        {testimonialData.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
