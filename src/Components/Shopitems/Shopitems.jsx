import React, { useContext } from "react";

import { CgShoppingCart } from "react-icons/cg";
import { Link } from "react-router-dom";

import ReactStars from "react-rating-stars-component";
import { PRODUCTS } from "../Products/Products";
import { PRODUCTS1 } from "../Products/Products";
import ShopContext from "../Shopcontext/Shopcontext";
import Prod from "../Prod/Prod";

const Shopitems = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {[...PRODUCTS, ...PRODUCTS1].map((product) => (
          <Prod key={product.id} data={product} />
        ))}
      </div>
    </>
  );
};

export default Shopitems;
