import React, { useContext, useState } from "react";
import "./Header.css";

import { ShopContext } from "../Shopcontext/Shopcontext";
import { CiMail } from "react-icons/ci";
import { BiPhoneCall } from "react-icons/bi";
import { BsHearts } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { CgShoppingCart, CgProductHunt } from "react-icons/cg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavLink, useLocation } from "react-router-dom";
import compare from "../../Assets/Images/compare.svg";
import wishlist from "../../Assets/Images/wishlist.svg";
import user from "../../Assets/Images/user.svg";
import logo from "../../Assets/Images/shopee.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { getTotalCartProducts, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const totalProducts = getTotalCartProducts();
  const location = useLocation();
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className="navbar-top">
        <div className="container-xxl">
          <div className="row">
            <div className="header-top">
              <div className="col-md-8 nav-header">
                <p className="nav-content">
                  The trending outfits at 60% off on
                  <span className="heart">Valentine special sales</span>
                  <span className="heart">
                    <BsHearts className="bshearts" />
                    <BsHearts className="bshearts" />
                  </span>
                </p>
              </div>
              <div className="col-md-2">
                <a href="tel:+254708118414">Call us at +91 (234) 567-890</a>
              </div>
              <div className="col-md">
                <Link className="links nav-linkks">
                  <CiMail />
                </Link>
                <Link className="links nav-linkks">
                  <BiPhoneCall />
                </Link>
              </div>{" "}
              <BsHearts className="bshearts" />{" "}
              <BsHearts className="bshearts" />{" "}
            </div>
            <div className="header-top-behind ">
              <div className="col-md-6 header-top-behindmsg">
                <p>
                  Save Upto 60% off
                  <span className="heart">Valentine Day special</span>
                  <BsHearts className="bshearts" />{" "}
                </p>
              </div>
              <div className="col-md-2 my-element">
                <a href="tel:+254708118414">Call us</a>
              </div>
              <div className="col-md-2 my-element">
                <Link className="links nav-linkks">
                  <CiMail />
                </Link>{" "}
                <Link className="links nav-linkks">
                  <BiPhoneCall />
                </Link>
              </div>
              <BsHearts className="bshearts" />{" "}
              <BsHearts className="bshearts" />{" "}
            </div>
          </div>
        </div>
      </header>
      <header className="navbar-middle sticky-top p-2 p-md-2 p-lg-2">
        <div className="container-xxl">
          <div className="row header-upper">
            <div className="col-md-2 nav-head">
              <button
                className="navbar-toggler d-md-none "
                type="button"
                onClick={toggleMenu}
              >
                <span className="navbar-toggler-icon">
                  {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
                </span>
              </button>

              <Link to="/">
                <img src={logo} alt="logo" className="img-fluid logo" />
              </Link>

              <button className="cart-span fs-3 d-md-none">
                <Link
                  to="cart"
                  className={
                    location.pathname === "/cart" ? "active" : "not-active"
                  }
                >
                  <CgShoppingCart />
                  <b>
                    <span>{totalProducts}</span>
                  </b>
                </Link>
              </button>

              <button className="cart-span-2 fs-4 d-md-none">
                <Link
                  to="login"
                  className={
                    location.pathname === "/login" ? "active" : "not-active"
                  }
                >
                  <VscAccount />
                </Link>
              </button>
            </div>

            <div className="col-md-10 row col-lg-10">
              <div className="col-md-3 m-auto">
                <div className="input-group d-none d-md-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
              </div>
              <div className="col-md-6 m-auto">
                <div className="menu-links mt-2 d-none d-md-flex d-lg-flex">
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/"
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/shop"
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/blog"
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/about"
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/contact"
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                  <div className="ms-auto gap-3">
                    <NavLink
                      to="/event"
                      className={
                        location.pathname === "/event" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      Events
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="row d-flex justify-content-center">
                  <div className="col-12 col-md-2 d-none d-md-flex d-lg-flex m-auto">
                    <div
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to=""
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <CgProductHunt className="me-1 fs-2" />
                      </Link>
                    </div>
                    <div
                      className={
                        location.pathname === "login" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/login"
                        className="d-flex align-items-center color-nav me-3"
                      >
                        <VscAccount className="me-1 fs-2" />
                      </Link>
                    </div>
                    <div
                      className={
                        location.pathname === "cart" ? "active" : "not-active"
                      }
                    >
                      <Link
                        onClick={toggleMenu}
                        to="/cart"
                        className="d-flex align-items-center color-nav me-3 cart-span-one"
                      >
                        <CgShoppingCart className="me-1 fs-2" />
                        <div>
                          <p>
                            <b>
                              <span>{totalProducts}</span>
                            </b>
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showMenu && (
              <div className="col-md-10 d-md-none mt-3">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Find products ..."
                    aria-label="Find products ..."
                    aria-describedby="basic-addon2"
                  />
                  <button className="input-group-text" id="basic-addon2">
                    search
                  </button>
                </div>
                <div className="menu-links mt-2">
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      to="/"
                      onClick={toggleMenu}
                    >
                      HOME
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/shop" ? "active" : "not-active"
                      }
                      to="/shop"
                      onClick={toggleMenu}
                    >
                      SHOP
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/blog" ? "active" : "not-active"
                      }
                      to="/blog"
                      onClick={toggleMenu}
                    >
                      BLOG
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/contact"
                          ? "active"
                          : "not-active"
                      }
                      to="/contact"
                      onClick={toggleMenu}
                    >
                      CONTACT
                    </NavLink>
                  </div>
                  <div className="mb-2">
                    <NavLink
                      className={
                        location.pathname === "/about" ? "active" : "not-active"
                      }
                      to="/about"
                      onClick={toggleMenu}
                    >
                      ABOUT
                    </NavLink>
                  </div>
                </div>

                <div className="menu-bar__actions">
                  <div className="mb-2">
                    <Link
                      to=""
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={compare} alt="compare" className="d-none" />
                      <span>New</span>
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link
                      to=""
                      className={
                        location.pathname === "/" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={wishlist} alt="wishlist" className="d-none" />
                      <span>Wishlist</span>
                    </Link>
                  </div>
                  <div className="mb-2">
                    <Link
                      to="/login"
                      className={
                        location.pathname === "/login" ? "active" : "not-active"
                      }
                      onClick={toggleMenu}
                    >
                      <img src={user} alt="user" className="d-none" />
                      <span>Account</span>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
