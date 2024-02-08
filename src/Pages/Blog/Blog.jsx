import React from "react";
import "./Blog.css";

import p2 from "../../Assets/Images/blog/p2.jpg";
import b2 from "../../Assets/Images/blog/b2.jpg";
import p5 from "../../Assets/Images/blog/p5.jpg";
import p1 from "../../Assets/Images/blog/p1.jpg";
import p3 from "../../Assets/Images/blog/p3.jpg";
import b7 from "../../Assets/Images/blog/b7.jpg";
import p7 from "../../Assets/Images/blog/p7.jpg";

const Blog = () => {
  return (
    <>
      <section className="blog-wrapper p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="shop-details text-center align-items-center">
                <h1 className="read-content">#Read More</h1>
                <p className="content-para">
                  Get to know what our trusted customers say...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blogs p-5">
        <div className="container-xxl container">
          <div className="row">
            <div className="bloghead-one">
              <h1 className="blog-h1">Explore more in our library</h1>
              <p className="blog-p">Why we have trending Outfits Everywhere</p>
            </div>

            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row">
                  <div className="col-md-4 blog-imageholder">
                    <img
                      src={p2}
                      className="img-fluid rounded-start blogcard-image"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Dev</h5>
                      <p className="card-text">
                        Step into style with Shopee Dresses where fashion meets
                        convenience! Explore a curated collection of dresses for
                        every occasion, enjoy exclusive deals, and redefine your
                        wardrobe effortlessly. Download the Shopee app now and
                        elevate your fashion game with affordable and trendy
                        finds!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 30 mins ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row">
                  <div className="col-md-4 blog-imageholder">
                    <img src={b2} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Lucy Liu</h5>
                      <p className="card-text">
                        Shopee's dress collection is on point! The app's
                        efficiency and constant updates make it my preferred
                        shopping destination. Great deals, fabulous choices –
                        Shopee, take my money.
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 5 hrs ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row">
                  <div className="col-md-4 blog-imageholder">
                    <img src={p5} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Ben Roger</h5>
                      <p className="card-text">
                        Shopee Dresses is a fashion paradise! The variety is
                        astounding, and the app's simplicity makes it a joy to
                        find the perfect dress. Unbeatable prices and quick
                        delivery my go-to for all dress needs!
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

            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row">
                  <div className="col-md-4 blog-imageholder">
                    <img src={p3} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Angelina</h5>
                      <p className="card-text">
                        Shopee Dresses is a lifesaver! The range caters to all
                        styles, and the reviews help me make informed decisions.
                        Fast shipping and quality dresses keep me coming back
                        for more.
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
            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row">
                  <div className="col-md-4 blog-imageholder">
                    <img src={b7} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Tristian Ann</h5>
                      <p className="card-text">
                        As a dress addict, Shopee is a dream come true. The app
                        offers trendy choices, and the user interface is so easy
                        to navigate. Plus, the deals make shopping guilt-free.
                        Highly recommend
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 1 day ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row ">
                  <div className="col-md-4 blog-imageholder">
                    <img src={p7} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Felix</h5>
                      <p className="card-text">
                        Shopee Dresses is my fashion haven. The app's
                        simplicity, coupled with the jaw-dropping deals, makes
                        every shopping spree exciting. Shopee, you've earned a
                        permanent spot on my phone!
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last Updated 1 hrs ago
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 blogcard-container">
              <div className="card blogcard-card">
                <div className="row">
                  <div className="col-md-4 blog-imageholder">
                    <img src={p1} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-md-6">
                    <div className="blogcard-body">
                      <h5 className="card-title">Burno Fernandas</h5>
                      <p className="card-text">
                        Shopee, you've won my heart with your dress collection!
                        The app's layout is user-friendly, and the discounts are
                        a steal. I'm a dedicated shopper now – can't get enough
                      </p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Last updated 10 mins ago
                        </small>
                      </p>
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
export default Blog;
