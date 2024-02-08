import React, { useContext } from "react";
import "./Cartitem.css";

import { ShopContext } from "../Shopcontext/Shopcontext";
import { RiDeleteBack2Line } from "react-icons/ri";

const Cartitem = (props) => {
  const { id, name, price, image, brand } = props.data;
  const { addToCart, cartItems, removeToCart, updateCartItemCount, itemPrice } =
    useContext(ShopContext);
  const itemsInStock =
    id === 0 ? Math.ceil(((id + 2.5) * 102) / 2) : Math.ceil((id * 102.5) / 2);

  return (
    <>
      <div className="container card cart-card">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className="cartitem-imgwrapper">
              <div className="cart-item-image">
                <img src={image} className="card-img-top img-fluid" alt="..." />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div className="productitem-list">
              <h2>{name}</h2>
              <p className="cart-item-id">
                Product Brand:
                <b className="product-brand"> {brand}</b>
              </p>
              <p className="cart-item-id">
                Product Price:
                <b className="product-price"> ₹{price}</b>
              </p>
              <p className="cart-item-id">
                Product Number:
                <b className="product-number"> {id}</b>
              </p>
              <p className="cart-item-id">
                Items in Stock:
                <b className="stock-item"> {itemsInStock}</b>
              </p>
            </div>
            <div className="counter-container">
              <div className="count-handler">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => addToCart(id)}
                >
                  +
                </button>
                <input
                  className="product-num form-control"
                  value={cartItems[id]}
                  onChange={(e) =>
                    updateCartItemCount(Number(e.target.value), id)
                  }
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => removeToCart(id)}
                >
                  -
                </button>
              </div>
              <button
                className="btn btn-outline-danger"
                onClick={() => removeToCart(id)}
              >
                <RiDeleteBack2Line />
              </button>
            </div>
            <div className="coupen">
              <input
                type="text"
                className="form-control"
                id="coupon"
                placeholder="Enter coupon code..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
