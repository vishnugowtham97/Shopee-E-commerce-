import React from "react";
import "./Home.css";

import Featuredproducts from "../../Components/Featuredproduct/Featuredproduct";
import Newarrivals from "../../Components/Newarrivals/Newarrivals";
import deal from "../../Assets/Images/banner/deal.jpg";
import { Link } from "react-router-dom";
import deals from "../../Assets/Images/banner/deals.jpg";
import p1 from "../../Assets/Images/blog/p1.jpg";
import p2 from "../../Assets/Images/blog/p2.jpg";
import p3 from "../../Assets/Images/blog/p3.jpg";
import p4 from "../../Assets/Images/blog/p4.jpg";
import p5 from "../../Assets/Images/blog/p5.jpg";
import p6 from "../../Assets/Images/blog/p6.jpg";
import p7 from "../../Assets/Images/blog/p7.jpg";
import blog4 from "../../Assets/Images/blog/blog-4.jpg";
import Newsletter from "../../Components/Newsletter/Newsletter";
import Hero from "../../Components/Hero/Hero";
import { BsHearts } from "react-icons/bs";

const Home = () => {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="d-flex flex-column justify-content-center ">
                <div
                  id="carouselExampleInterval"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="back-details">
                      <p className="trade-offer text">
                        Unlock special discounts
                      </p>
                      <h1 className="valantine_head">
                        Valentine Day Special <BsHearts className="bshearts" />
                      </h1>
                      <h2>On every products</h2>

                      <p className="trade-offer">
                        Shop smarter, save better with Shopee
                      </p>

                      <Link
                        to="/shop"
                        className="btn btn-primary bg-button"
                        id="button-link"
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />

      <section className="featured-products p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Top Picks Just for You!</h1>
              <p>Stylish Designs for Every Season</p>
            </div>
            <Featuredproducts />
          </div>
        </div>
      </section>

      <section className="repair-services p-5">
        <div className="container-xxl">
          <div className="row ">
            <div className="repair-details text-center align-items-center">
              <h5 className="mb-3 text-white">Repair Services</h5>
              <h2 className="mb-3 text-white">
                On 70% Off on All Products And Accessories
              </h2>
              <button className="explore-btn">Explore Now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="new-arrivals p-4">
        <div className="container-xxl">
          <div className="row">
            <div className="d-flex align-items-center justify-content-center flex-column">
              <h1>New Arrivals</h1>
              <p>Your Best Designer Outfits</p>
            </div>
            <Newarrivals />
          </div>
        </div>
      </section>
      <section className="hot-deals p-5 d-flex flex-column flex-md-row justify-content-center align-items-center align-items-md-start">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6 d-flex">
              <div className="card m-auto mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={deal}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Hot Deals</h5>
                      <h2 className="card-text mb-2">Buy One get One free.</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          The latest best collection in our closet <br />
                          Feel Cute with our outfits
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="learn-btn">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={deals}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Season-In</h5>
                      <h2 className="card-text mb-2">All Weather Attire</h2>
                      <p className="card-text mb-2">
                        <small className="text-body-secondary">
                          It never matter which season it is <br />
                          We got you covered
                        </small>
                      </p>
                      <Link to="blog">
                        <button className="learn-btn">Learn more</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 blog-contents">
              <h1 className="content-blogh1">What our customers say...</h1>
              <p className="content-blogp">
                Our customers never miss a bit on providing feedback
              </p>
            </div>
            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p1} className="card-img-top img-fluid" alt="..." />
                <h5 className="image-card-title">Burno Fernandas</h5>
                <div className="card-body">
                  <h5 className="card-title">Burno Fernandas</h5>
                  <p className="card-text">
                    Finding great deals is a breeze on Shopee. The app's layout
                    makes it simple to discover the latest discounts. My wallet
                    is happy, and so am I!
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p2} className="card-img-top img-fluid" alt="..." />{" "}
                <h5 className="image-card-title">Dev</h5>
                <div className="card-body">
                  <h5 className="card-title">Dev</h5>
                  <p className="card-text">
                    Shopee's deals are like a secret weapon for savvy shoppers.
                    The discounts are so good; it almost feels like stealing.
                    Love the app, love the savings!
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p3} className="card-img-top img-fluid" alt="..." />
                <h5 className="image-card-title">Angelina Das</h5>
                <div className="card-body">
                  <h5 className="card-title">Angelina Das</h5>
                  <p className="card-text">
                    As a budget-conscious shopper, Shopee has been a lifesaver.
                    The deals are unmatched, and the app makes it easy to find
                    exactly what I need at the best prices.
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p4} className="card-img-top img-fluid" alt="..." />
                <h5 className="image-card-title">Peter Huson</h5>
                <div className="card-body">
                  <h5 className="card-title">Peter Huson</h5>
                  <p className="card-text">
                    Shopee turns regular shopping into a celebration with its
                    incredible deals. The discounts are jaw-dropping, making
                    every purchase a win-win. Highly recommend!
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p5} className="card-img-top img-fluid" alt="..." />
                <h5 className="image-card-title">Ben Roger</h5>

                <div className="card-body">
                  <h5 className="card-title">Ben Roger</h5>
                  <p className="card-text">
                    Deals on Shopee are the real deal! I've compared prices, and
                    Shopee consistently offers the best bargains. Super
                    satisfied with my purchases and the savings!
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p6} className="card-img-top img-fluid" alt="..." />
                <h5 className="image-card-title">Gabriele</h5>
                <div className="card-body">
                  <h5 className="card-title">Gabriele</h5>
                  <p className="card-text">
                    I'm a loyal Shopee shopper, thanks to the fantastic deals.
                    The daily discounts keep me coming back for more. It's like
                    a treasure hunt for the best prices!
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img src={p7} className="card-img-top img-fluid" alt="..." />
                <h5 className="image-card-title">Felix</h5>
                <div className="card-body">
                  <h5 className="card-title">Felix</h5>
                  <p className="card-text">
                    Shopee's deals are a game-changer! I save so much money
                    without compromising on quality. The app is user-friendly,
                    and the discounts are too good to resist.
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-6 blogs-base">
              <div className="home-card">
                <img
                  src={blog4}
                  className="card-img-top top-image img-fluid"
                  alt="..."
                />
                <h5 className="image-card-title">Katy Perry</h5>

                <div className="card-body">
                  <h5 className="card-title">Katy Perry</h5>
                  <p className="card-text">
                    Amazing deals on Shopee! I'm always surprised at the
                    discounts I find. It's become my go-to for online shopping.
                    Love the variety and unbeatable prices!
                  </p>
                  <Link to="about">
                    <button className="learn-btn">Learn more</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default Home;
