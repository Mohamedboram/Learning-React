import React from "react";
import Button from "./Button";
import { useState } from "react";
//let imageUrl = require("../images/milk-bottle.png")
let style = {
  padding: "0px 20px",
  fontSize: 13,
};


function ProductDetails(props) {
  //let productCount = 0;
  let [productCount, updateCount]= useState(0)
  function displayProductFormatted() {
    return productCount > 0 ? productCount : "Zero";
  }
  let badgeClass = "badge-margin-left-40 badge ";
  badgeClass += props.isAvailable ? "bg-success" : "bg-danger";
 let incrementProduct= function () {
  updateCount(++productCount);
   /*  productCount++
    console.log(productCount); */
  }
  let decrementProduct= function () {
    updateCount(--productCount);
    /* productCount--
    console.log(productCount); */
  }
  return (
    <div className="d-flex align-items-center justify-content-start mt-1" >
      <h6 style={{ marginRight: "30px" }} className="font-weight-bold my-2">
        {props.price}$
      </h6>
      <Button eventHandler={decrementProduct} disable={productCount=== 0}>-</Button>

      <span style={style}>{displayProductFormatted()}</span>
      <Button disable={productCount >=props.stock} eventHandler={incrementProduct}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "available" : "unavailable"}
      </span>
      {props.children}
    </div>
  );
}

export default ProductDetails;
