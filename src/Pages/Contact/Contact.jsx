import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section className="contact-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 contact-content">
              <h1 className=" text">Lets_talk</h1>
              <p className=" text contact-contentpara">
                Leave a message, We love to hear from you!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-wrapper-details">
        <div className="container-xxl">
          <div className="row contact-body">
            <div className="col-lg-6 col-md-12 p-3">
              <div className="map card m-auto embed-responsive embed-responsive-16by9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15550.451332982722!2d80.21764372246405!3d12.98906268666615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ef77e67719%3A0x46aeb01fcdd50dc0!2sPhoenix%20Marketcity%20Chennai!5e0!3m2!1sen!2sin!4v1668532780442!5m2!1sen!2sin"
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card p-5">
                <h2 className="footer-title mb-3">
                  <b>Get in Touch</b>
                </h2>
                <p className="body-details">
                  <b>Address :</b> 2nd floor, cross-cut street, Tamil Nadu.
                </p>
                <p className="body-details">
                  <b>Phone : </b>
                  <a className="footer-tel" href="tel:+1234567890">
                    Call us at +1 (234) 567-890
                  </a>
                </p>
                <h5>
                  <b>Head Office:</b>
                  <p className="fonty">in Chennai</p>
                </h5>
                <h5>
                  <b>E-mail:</b>
                  <p className="sub-link">shopee@shopee.in</p>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-message p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-8 col-md-10 col-sm-12 m-auto">
              <div className="card p-4">
                <h2 className="text-center mb-4">Leave Us A message</h2>
                <div className="contact-card-box">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                      />
                    </div>
                    <div className="col-12">
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
                        placeholder="Email"
                      />
                    </div>
                    <div className="col-12">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Type in your message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12 contact-submitbtn">
                      <button id="button-link-1" type="submit">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
