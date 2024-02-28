import React from "react";
import Products from "./products";

function ProductList(props) {
  return (
   
        <ul className="list-group shadow">
      
        {props.newProductList.map((product) => (
          <Products
            key={product?.pID}
            name={product?.pName}
            desc={product?.desc}
            isAvailable={product?.isAvailable}
            img={product?.image}
            price={product?.price}
            stock={product?.stock}
          ></Products>
        ))}
        
        </ul>
  
  );
}

export default ProductList;
