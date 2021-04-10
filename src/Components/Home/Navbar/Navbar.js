import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link ms-5" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ms-5" href="/">
                  Dental Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "white" }}
                  className="nav-link ms-5"
                  href="/"
                >
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "white" }}
                  className="nav-link ms-5"
                  href="/"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "white" }}
                  className="nav-link ms-5"
                  href="/"
                >
                  Contact US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
