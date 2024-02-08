import React from "react";
import "./Hero.css";

import orders from "../../Assets/Images/features/f1.png";
import orders1 from "../../Assets/Images/features/f2.png";
import orders2 from "../../Assets/Images/features/f3.png";
import orders3 from "../../Assets/Images/features/f6.png";
import orders4 from "../../Assets/Images/features/f4.png";
import orders5 from "../../Assets/Images/features/f5.png";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
              <div className="row hero-content">
                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card fast-order">
                    <img
                      src={orders}
                      className="card-img-top img-fluid m-auto"
                      alt="Fast Orders"
                    />
                    <div className="card-body">
                      <p className="card-text">Fast Orders</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card fast-order">
                    <img
                      src={orders1}
                      className="card-img-top img-fluid m-auto"
                      alt="Quick Shipping"
                    />
                    <div className="card-body">
                      <p className="card-text">QuickShipping</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card fast-order">
                    <img
                      src={orders2}
                      className="card-img-top img-fluid m-auto"
                      alt="High Saves"
                    />
                    <div className="card-body">
                      <p className="card-text">High Saves</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card fast-order">
                    <img
                      src={orders3}
                      className="card-img-top img-fluid m-auto"
                      alt="24/7 Support"
                    />
                    <div className="card-body">
                      <p className="card-text">24/7 Support</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card fast-order">
                    <img
                      src={orders5}
                      className="card-img-top img-fluid m-auto"
                      alt="Online Orders"
                    />
                    <div className="card-body">
                      <p className="card-text">Happy sales</p>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-2">
                  <div className="card fast-order">
                    <img
                      src={orders4}
                      className="card-img-top img-fluid m-auto"
                      alt="24/7 Support"
                    />
                    <div className="card-body">
                      <p className="card-text">24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
