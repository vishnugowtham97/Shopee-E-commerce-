import React, { useContext, useState } from "react";
import "./Checkout.css";
import pay from "../../Assets/Images/pay/pay.png";
import { ShopContext } from "../../Components/Shopcontext/Shopcontext";

const Checkout = () => {
  const { getTotalCartProducts, getTotalCartAmount, resetCart } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handlePay = () => {
    window.alert(
      `Thank you for your purchase of ${totalProducts} products for a total of $${totalAmount}. 
      
      Your request has been received and is being processed. 
      Your shipping details are:
      Email: ${email},  
      Address: ${address}, 
      Address 2: ${address2}, 
      City: ${city}, 
      State: ${state}, 
      Zip: ${zip}`
    );
    resetCart();
  };

  return (
    <>
      <section className="checkout p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-md-6">
              <h1 className="payment-heading">Payment Method</h1>
              <div className="accordion" id="accordionExample">
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="paymentcard-align btn col-12 btn-light btn-block text-start collapsed p-3 rounded-0 border-bottom-custom"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <div className="razorpay-container">
                        <div className="col-6">
                          <span>Razor Pay</span>
                        </div>
                        <div className="col-6">
                          <img src={pay} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Paypal email"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="btn col-12 btn-light btn-block text-start p-3 rounded-0"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      <div className="creditcard-container">
                        <div className="col-6">
                          <span>Credit card</span>
                        </div>
                        <div className="icons col-6">
                          <img src={pay} alt="" className="img-fluid" />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="card-body payment-card-body">
                      <span className="card-text">Card Number</span>
                      <div className="input">
                        <i className="fa fa-credit-card"></i>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="0000 0000 0000 0000"
                          required
                        />
                      </div>
                      <div className="row expire-date">
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            Expiry Date
                          </span>
                          <div className="input cvv">
                            <i className="fa fa-calendar"></i>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className="font-weight-normal card-text">
                            CVC/CVV
                          </span>
                          <div className="input">
                            <i className="fa fa-lock"></i>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="000"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <span className="text-muted certificate-text">
                        <i className="fa fa-lock"></i> Your transaction is
                        secured with ssl certificate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 p-2">
              <h1 className="shipping-details">
                Fill the following details for shipping
              </h1>
              <form className="row g-3 mb-3">
                {/* Shipping details form */}
                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* Password */}
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                {/* Address */}
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                {/* Address 2 */}
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Street or Area"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    required
                  />
                </div>
                {/* City */}
                <div className="col-md-6">
                  <label htmlFor="inputCity" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>
                {/* State */}
                <div className="col-md-4">
                  <label htmlFor="inputState" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                  />
                </div>
                {/* Zip */}
                <div className="col-md-2">
                  <label htmlFor="inputZip" className="form-label">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Pincode"
                    pattern="[0-9]+"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    required
                  />
                </div>
                <div className="col-12 payment-btn">
                  <button id="button-linker" type="submit" onClick={handlePay}>
                    Proceed To Pay
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
