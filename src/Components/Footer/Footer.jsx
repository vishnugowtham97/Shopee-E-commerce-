import React, { useState } from "react";
import "./Footer.css";

import { Link } from "react-router-dom";
import { BsDropbox, BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import pay from "../../Assets/Images/pay/pay.png";

const Footer = () => {
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSendClick = () => {
    if (message.trim() !== "") {
      setShowSuccessMessage(true);
    }
  };
  return (
    <>
      <footer className="footer">
        <div className="container-xxl">
          <div className="row footer-side">
            <div className="footer-base col-md-4 col-lg-4">
              <h2 className="footer-title">
                <b>Address</b>
              </h2>
              <div className="contact-wraper">
                <p>
                  <b>Address:</b> 10th cross street, Gandhipuram, Coimbatore
                </p>
              </div>
              <div className="contact-wraper">
                <p>
                  <b>Phone:</b>
                  <a
                    className="footer-tel"
                    id="footer-tele"
                    href="tel:+1234567890"
                  >
                    Call us at +1 (234) 567-890
                  </a>
                </p>
              </div>
              <div className="contact-wraper">
                <p>
                  <b>Follow the developer</b>
                </p>
              </div>
              <div className="socials">
                <Link
                  to="https://twitter.com/woolfyjr?t=6eAX97_dLUnFGQDNYlpLjw&s=09"
                  id="footer-link"
                  target="_blank"
                  className="link-gap"
                >
                  <BsTwitter />
                </Link>
                <Link
                  to="https://github.com/vishnugowtham97"
                  className="link-gap"
                  target="-blank"
                  id="footer-link"
                >
                  <BsGithub />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/vishnugowtham97/"
                  className="link-gap"
                  targe="-_blank"
                  id="footer-link"
                >
                  <BsLinkedin />
                </Link>
                <Link
                  to="https://www.dropbox.com/login"
                  id="footer-link"
                  target="_blank"
                  className="link-gap"
                >
                  <BsDropbox />
                </Link>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 footer-about">
              <h2 className="footer-title">
                <b>About</b>
              </h2>
              <div className="footer-content">
                <Link to="/about" id="footer-links">
                  About Us
                </Link>
              </div>
              <div className="footer-content">
                <Link to="checkout" id="footer-links">
                  Delivery
                </Link>
              </div>
              <div className="footer-content">
                <Link id="footer-links">Privacy Policy</Link>
              </div>
              <div className="footer-content">
                <Link id="footer-links">Terms & Conditions</Link>
              </div>
              <div className="footer-content">
                <Link id="footer-links">Fee Policy</Link>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title">
                <b>Account</b>
              </h2>
              <div className="footer-content">
                <Link to="/login" id="footer-links">
                  Profile
                </Link>
              </div>
              <div className="footer-content">
                <Link to="/cart" id="footer-links">
                  View Cart
                </Link>
              </div>
              <div className="footer-content">
                <Link to="/contact" id="footer-links">
                  Help
                </Link>
              </div>
              <div className="footer-content">
                <Link id="footer-links">Payments</Link>
              </div>
              <div className="footer-content">
                <Link id="footer-links">My Wishlist</Link>
              </div>
              <div className="footer-content">
                <Link id="footer-links">Coupons</Link>
              </div>
            </div>
            <div className="col-md-4 col-lg-4">
              <h2 className="footer-title">
                <b>Connect us</b>
              </h2>
              <div footer-message>
                <div className="main-content">
                  <input
                    type="text"
                    className="credit-footer"
                    placeholder="Type your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <button onClick={handleSendClick}>Send</button>
                </div>
                {showSuccessMessage && (
                  <div className="footer-msg">Send successfully!</div>
                )}
              </div>
              <p className="footer-content">Payment Methods</p>
              <div className="pay">
                <Link
                  to="https://dashboard.razorpay.com/signin?screen=sign_in&utm_medium=organic&utm_source=google"
                  target="_blank"
                >
                  <img src={pay} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <hr className="credit-footer" />
          <div className="row">
            <div className="col-12 col-md-6">
              <p className="copy text-md-start">
                &copy;All copyrights received 2023
              </p>
            </div>
            <div className="col-12 col-md-6">
              <ul className="my-list">
                <li className="list-inline-item">
                  <Link to="#" className="my-list-text">
                    Privacy Policy
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="my-list-text">
                    Terms of Use
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" className="my-list-text">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
