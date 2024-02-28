import React from "react";
import ProductDetails from "./productdetails";




function Products(props) {
 
  console.log(props)
  return (
    <li className="list-group-item">
      <div className="media align-items-lg-center flex-column flex-lg-row p-3 d-flex" style={{backgroundColor: props.isAvailable ? 'white' : '#dedede'}}>
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">{props.desc}</p>
          <ProductDetails
            price={props.price}
            isAvailable={props.isAvailable}

            stock={props.stock}
            
          >
    
          </ProductDetails>
        </div>
        <img
          src={props.img}
          width="100"
          className="ml-lg-5 order-1 order-lg-2"
          alt="productImg"
        />
      </div>
    </li>
  );
}

export default Products;
