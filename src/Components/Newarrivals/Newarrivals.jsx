import React from "react";
import "./Newarrival.css";

import { Link } from "react-router-dom";
import { PRODUCTS1 } from "../Products/Products";

const Newarrivals = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 new-arrival">
        {PRODUCTS1.slice(1, 5).map((product) => (
          <div className="col arrival-card">
            <div key={product.id} className="card arrival-productcard">
              <img
                src={product.image}
                className="card-img-top img-fluid"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text product-brand">{product.brand}</p>
                <h5 className="product-name">{product.name} </h5>
                <div className="card-footer text-center m-auto">
                  <p className="fs-4 text-danger">{product.status} </p>
                  <p className="price">
                    <span className="red"></span>
                    <strike>₹ {product.rate} </strike>
                  </p>
                </div>
                <div className="card-footer d-md-none">
                  <div className="view-btn">
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

export default Newarrivals;
