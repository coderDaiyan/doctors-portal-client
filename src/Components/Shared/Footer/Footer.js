import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer__section">
      <div className="row">
        <div className="col-md-3">
          <ul className="first_column text-secondary">
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4
            className="ms-4 fw-bold"
            style={{ color: "var(--text-color-green)", marginTop: "150px" }}
          >
            Services
          </h4>
          <ul
            style={{ marginTop: "20px" }}
            className="second_column text-secondary"
          >
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4
            className="ms-4 fw-bold"
            style={{ color: "var(--text-color-green)", marginTop: "150px" }}
          >
            Oral Health
          </h4>
          <ul
            style={{ marginTop: "20px" }}
            className="third_column text-secondary"
          >
            <li>Emergency Dental Care</li>
            <li>Check Up</li>
            <li>Treatment of Personal Diseases</li>
            <li>Tooth Extraction</li>
            <li>Check Up</li>
            <li>Check Up</li>
            <li>Check Up</li>
          </ul>
        </div>
        <div className="col-md-3">
          <h4
            className="ms-4 fw-bold"
            style={{ color: "var(--text-color-green)", marginTop: "150px" }}
          >
            Our Address
          </h4>{" "}
          <br />
          <p className="text-secondary ms-4">
            New York - 101010 Hudson <br /> Yards
          </p>
          <ul className="social-media list-inline">
            <li className="list-inline-item">
              <FontAwesomeIcon className="icon" icon={faFacebookF} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
            </li>
            <li className="list-inline-item">
              <FontAwesomeIcon className="icon" icon={faTwitter} />
            </li>
          </ul>{" "}
          <br /> <br />
          <h5 className="ms-3 text-secondary">Call Now</h5>
          <button
            style={{ background: "var(--gradient-color)" }}
            className="btn text-white ms-3"
          >
            +110 234 5698
          </button>
        </div>
      </div>
      <footer className="mt-5 text-center">
        Copyright 2021. All Rights Reserved. Developed By{" "}
        <b>Developer Daiyan</b>
      </footer>
    </section>
  );
};

export default Footer;
