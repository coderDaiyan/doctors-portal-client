import React from "react";
import Appoinment from "../../../assets/images/appoinment.png";
import "./FeaturedService.css";

const FeaturedService = () => {
  return (
    <section className="featured__service">
      <div className="row">
        <div className="col-md-4 img-size">
          <img className="service-img" src={Appoinment} alt="" />
        </div>
        <div className="col-md-8 mt-3">
          <h1
            className="fw-bold"
            style={{ fontSize: "3rem", color: "var(--text-color-dark)" }}
          >
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="detail">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            consequatur voluptates error voluptatem labore. In laborum adipisci
            qui, numquam corrupti id quasi debitis nihil, dolorum tempore
            ratione et? Cumque, qui! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Architecto consequatur voluptates error voluptatem
            labore. In laborum adipisci qui, numquam corrupti id quasi debitis
            nihil, dolorum tempore ratione et? Cumque, qui!
          </p>
          <br />
          <button
            style={{ background: "var(--gradient-color)", color: "white" }}
            className="btn btn-lg learn-more-btn"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedService;
