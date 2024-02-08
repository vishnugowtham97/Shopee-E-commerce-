import React from "react";
import "./Featuredproduct.css";

import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from "../Products/Products";
import { PRODUCTS1 } from "../Products/Products";

const Featuredproducts = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
        {PRODUCTS.map((product) => (
          <div className="col mb-5">
            <div key={product.id} className="card h-100 m-auto">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text product-brand">{product.brand}</p>
                <h5 className="product-name">{product.name} </h5>
                <div className="card-footer m-auto text-center">
                  <p className="text-danger fs-4">{product.status}</p>
                  <p className="price">
                    <span className="red"></span>
                    <strike>₹{product.rate} </strike>
                  </p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="view-product">
                    <Link to="shop" className="m-auto">
                      View products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featuredproducts;
