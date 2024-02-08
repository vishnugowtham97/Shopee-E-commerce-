import React, { useContext, useState } from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../Components/Products/Products";
import { PRODUCTS1 } from "../../Components/Products/Products";
import { ShopContext } from "../../Components/Shopcontext/Shopcontext";
import CartItem from "../../Components/Cartitem/Cartitem";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 576) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <>
      <section className="cart">
        <div className="container-xxl" id="cart-container">
          {totalAmount > 0 ? (
            <div className="row">
              <div className="cart-basket">
                <h2 className="cartname">Cart Basket</h2>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="productname">Product</h5>
              </div>
              <div className="col-12 col-md-5">
                <h5 className="productname">Details</h5>
              </div>

              <div className="p-3">
                {[...PRODUCTS, ...PRODUCTS1].map((product) => {
                  if (cartItems[product.id] !== 0) {
                    return <CartItem key={product.id} data={product} />;
                  }
                })}
                <div className="col-12 p-2 text-end">
                  <button onClick={() => clearCart()} id="clear-cart">
                    Clear Basket
                  </button>
                </div>

                <hr />
                <div className="row">
                  <div className="col-12 col-md-6 d-flex m-auto justify-content-center mt-4">
                    <button onClick={() => navigate("/shop")}>
                      {isMobile ? "Continue" : "Continue Shopping"}
                    </button>
                  </div>
                  <div className="col-12 col-md-6 total m-auto d-flex flex-column p-5">
                    <div className="col-12">
                      <div className="text-end">
                        <h2 className="mb-3">
                          <b>Total</b>
                        </h2>
                        <div className="align-items-center">
                          <div>
                            <p className="total-price align-items-center">
                              <b>₹{totalAmount}</b>
                            </p>
                          </div>
                        </div>
                        <button
                          onClick={() => navigate("/checkout")}
                          className="mt-5"
                        >
                          {isMobile ? "Check Out" : "Proceed to Checkout"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="container-xxl">
              <div className="row">
                <div className="cart-emptymsg">
                  <h2>Your Cart Is Empty!!!</h2>
                  <Link to="/shop" className="continue-shop">
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
