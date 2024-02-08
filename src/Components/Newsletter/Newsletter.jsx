import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <>
      <section className="news-letter">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <div className="newsletter-content">
                <h2 className="context"> Subscribe to our page</h2>
                <h5>Don't miss out on exclusive deals offer!</h5>
              </div>
            </div>
            <div className="col-md-6 details d-flex flex-column justify-content-center">
              <div className="input-group mb-3">
                <input
                  type="text"
                  id="news-input"
                  className="form-control"
                  placeholder="@example.com"
                  aria-label="@example.com"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text" id="basic-addon2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
