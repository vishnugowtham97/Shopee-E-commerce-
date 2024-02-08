import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password == "") {
      setError("Please enter correct details!");
    } else {
      setError("Login successful");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <section className="login-wrapper">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8 col-sm-10">
            <div className="card">
              <div className="card-body signup-body">
                <h2 className="card-bodyheading">LOGIN</h2>
                <p className="card-bodypara">Welcome Back!!</p>
                <form onSubmit={handleSubmit}>
                  <div className="email-box">
                    <label htmlFor="email" className="form-label mb-3">
                      Enter Your Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="enter email here ..."
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </div>
                  <div className="password-box">
                    <label htmlFor="password" className="form-label">
                      Enter Your password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="enter password here..."
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      required
                    />
                  </div>
                  {error && <div className="alert alert-danger">{error}</div>}
                  <div className="password-box">
                    <Link to="/forgotpasword" className="form-link">
                      Forgot password?
                    </Link>
                  </div>
                  <div className="account-login">
                    <p className="m-0">Dont have an account?</p>
                    <Link to="/signup" className="form-link">
                      Sign up
                    </Link>
                  </div>
                  <div className="login-btn">
                    <button type="submit">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
