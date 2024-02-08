import React from "react";
import "./Details.css";
import Productdetails from "../../Components/Productdetails/Productdetails";

const Details = () => {
  return (
    <>
      <section className="product-details p-5">
        <div className="conntainer-xxl">
          <div className="row">
            <Productdetails />
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
