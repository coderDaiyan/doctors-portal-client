import React from "react";
import LoginBG from "../../../assets/images/login-bg.png";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section
        onSubmit={handleSubmit}
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <div className="row parent">
          <h2
            className="fw-bold"
            style={{ marginLeft: "180px", color: "var(--text-color-green)" }}
          >
            Login
          </h2>
          <div className="col-md-4 login_form">
            <form>
              <div className="mb-3">
                <label className="text-secondary" htmlFor="emailInput">
                  Email
                </label>
                <br />
                <input
                  className="input_text"
                  type="email"
                  name="emailInput"
                  id="emailInput"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="text-secondary" htmlFor="passwordInput">
                  Password
                </label>
                <br />
                <input
                  className="input_text"
                  type="password"
                  name="passwordInput"
                  id="passwordInput"
                  required
                />
              </div>
              <button
                style={{ background: "var(--gradient-color)" }}
                className="btn w-100"
              >
                Sign In
              </button>
            </form>
          </div>
          <div className="col-md-8">
            <img className="login_bg" src={LoginBG} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
