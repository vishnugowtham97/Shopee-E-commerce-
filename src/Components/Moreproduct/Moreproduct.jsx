import React from "react";
import "./Moreproduct.css";

import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from "../Products/Products";
import { PRODUCTS1 } from "../Products/Products";

const Moreproduct = (props) => {
  return (
    <>
      <section className="more-featured-products">
        <div className="container-xxl">
          <div className="row">
            <div className="more-product">
              <h1>More products</h1>
              <p>You might also like these</p>
            </div>
            <div className="row product-alignment">
              {PRODUCTS1.slice(3, 7).map((product) => (
                <div className="col-3 mb-3">
                  <Link
                    key={product.id}
                    to="/view2"
                    className="card align-items-center"
                  >
                    <img
                      src={product.image}
                      className="card-img-top img-fluid"
                      alt="..."
                    />
                    <div className="card-body me-auto">
                      <p className="card-text mb-2">{product.brand}</p>
                      <h5>{product.name} </h5>
                      <ReactStars
                        count={5}
                        edit={false}
                        value={4}
                        size={24}
                        activeColor="#EA9D5A"
                      />
                      <p className="price">
                        <span className="price-color">{product.price} </span>
                        ₹;
                        <strike>500₹</strike>
                      </p>
                    </div>
                    <div className="action-bar position-absolute">
                      <div className="view-btnlink">
                        <Link to="/view2" id="button-linker" className="mb-3">
                          View
                        </Link>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moreproduct;
