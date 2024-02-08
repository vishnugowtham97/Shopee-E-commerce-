import React, { useEffect, useState } from "react";
import "./About.css";

import { Link } from "react-router-dom";
import p13 from "../../Assets/Images/blog/p13.jpg";
import p8 from "../../Assets/Images/blog/p8.jpg";
import p9 from "../../Assets/Images/blog/p9.jpg";
import p10 from "../../Assets/Images/blog/p10.jpg";
import p11 from "../../Assets/Images/blog/p11.jpg";
import p12 from "../../Assets/Images/blog/p12.jpg";
import shopee1 from "../../Assets/Images/about/shopee1.jpeg";
import video from "../../Assets/Images/about/1.mp4";
import Marquee from "react-fast-marquee";
import orders from "../../Assets/Images/features/f1.png";
import orders1 from "../../Assets/Images/features/f2.png";
import orders2 from "../../Assets/Images/features/f3.png";
import orders3 from "../../Assets/Images/features/f6.png";
import orders4 from "../../Assets/Images/features/f4.png";
import orders5 from "../../Assets/Images/features/f5.png";
import mobileImage from "../../Assets/Images/about/shopee-india.webp";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <section className="about-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details">
                <h1>#Know Us</h1>
                <p>Get to know us more</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="row">
          <div className="col-md-6">
            <img src={shopee1} alt="" className="img-fluid about-images" />
          </div>
          <div className="col-md-6 about-company">
            <h1>
              <b>Who are we?</b>
            </h1>
            <p className="card-text">
              Shopee: Your go-to fashion destination. Discover the latest
              trends, unbeatable prices, and a user-friendly experience. Embrace
              style without compromise – redefine your wardrobe with Shopee
              today
            </p>
            <p className="card-text">
              Our platform is designed for simplicity, ensuring a seamless
              browsing and purchasing experience. With daily deals and
              discounts, we make staying in style accessible to all. Elevate
              your wardrobe effortlessly – explore Shopee for fashion that
              speaks to your unique taste and budget.
            </p>
          </div>
        </div>
      </section>

      <section className="about-app">
        <h2 className="about-apph2">
          Download our
          <Link
            to={
              "https://play.google.com/store/apps/details?id=com.shopee.id&hl=en&gl=US"
            }
          >
            <span className="app-name"> Shopee App</span>
          </Link>
        </h2>
        <div className="col-12 p-5 col-md-8 mx-auto">
          {isMobile ? (
            <img src={mobileImage} alt="Mobile Image" className="w-100" />
          ) : (
            <video loop muted autoPlay src={video} className="w-100"></video>
          )}
        </div>
      </section>

      <section className="abouts p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 about-bannerthing">
              <h1 className="about-bannerh1">What our customers say...</h1>
              <p className="about-bannerp">
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            <div className="col-12 col-md-6 blog-about">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 about-blogcontainer">
                    <img
                      src={p13}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Scott Edward</h5>
                      <p className="card-text">
                        Finding great deals is a breeze on Shopee. The app's
                        layout makes it simple to discover the latest discounts.
                        My wallet is happy, and so am I!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 blog-about">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 about-blogcontainer">
                    <img src={p8} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Micheal Faraday</h5>
                      <p className="card-text">
                        Shopee's deals are like a secret weapon for savvy
                        shoppers. The discounts are so good; it almost feels
                        like stealing. Love the app, love the savings!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 blog-about">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 about-blogcontainer">
                    <img src={p9} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Catherine Isabella</h5>
                      <p className="card-text">
                        As a budget-conscious shopper, Shopee has been a
                        lifesaver. The deals are unmatched, and the app makes it
                        easy to find exactly what I need at the best prices.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 blog-about">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 about-blogcontainer">
                    <img src={p10} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hanna Baker</h5>
                      <p className="card-text">
                        Shopee turns regular shopping into a celebration with
                        its incredible deals. The discounts are jaw-dropping,
                        making every purchase a win-win. Highly recommend!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 blog-about">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 about-blogcontainer">
                    <img src={p11} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Sanjay Mittal</h5>
                      <p className="card-text">
                        I'm a loyal Shopee shopper, thanks to the fantastic
                        deals. The daily discounts keep me coming back for more.
                        It's like a treasure hunt for the best prices!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated now
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 blog-about">
              <div className="card">
                <div className="row">
                  <div className="col-md-4 about-blogcontainer">
                    <img
                      src={p12}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title" id="inner-content">
                        Arun Prakash
                      </h5>
                      <p className="card-text">
                        Deals on Shopee are the real deal! I've compared prices,
                        and Shopee consistently offers the best bargains. Super
                        satisfied with my purchases and the savings!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 about-slider">
              <Marquee className="slide">
                <div>
                  <img src={orders} alt="order" className="img-fluid" />
                  <p className="order">Fast Orders</p>
                </div>
                <div>
                  <img src={orders1} alt="shipping" className="img-fluid" />
                  <p className="order">Quick Shipping</p>
                </div>
                <div>
                  <img src={orders2} alt="saving" className="img-fluid" />
                  <p className="order">High Saves</p>
                </div>
                <div>
                  <img src={orders3} alt="support" className="img-fluid" />
                  <p className="order">24/7 Support</p>
                </div>
                <div>
                  <img src={orders4} alt="promot" className="img-fluid" />
                  <p className="order">Promotions</p>
                </div>
                <div>
                  <img src={orders5} alt="sales" className="img-fluid" />
                  <p className="order">Happy Sales</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
