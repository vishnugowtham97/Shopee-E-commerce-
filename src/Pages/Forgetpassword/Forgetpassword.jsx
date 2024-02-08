import React, { useState } from "react";
import "./Forgetpassword.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="login-wrapper f-pass">
      <div className="container-xxl">
        <div className="row forgetpassword-cont">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body forgetpass-body">
                <h2 className="text-center">Forgot password</h2>
                <p className="fpass-emailbox">
                  Enter your email address to receive a reset confirmation
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mail-label">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="enter email here ..."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="fpass-submitbtn">
                    <button type="submit">Submit</button>
                  </div>
                </form>
                {message && <p className="fpass-message">{message}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
