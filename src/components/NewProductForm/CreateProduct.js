import React from "react";
import ProductForm from "./ProductForm";
import { useState } from "react";
function CreateProduct(props) {
  let [formState, updateFormState]= useState(false);
  function logProduct(product) {
    props.createProduct(product);
  }
  function showForm(){
    updateFormState(true)

  }
  function onProductSubmittedOrCancelled(){
    updateFormState(false);
  }
  return (
    <div
      style={{ backgroundColor: "white", padding: "10px 20px" }}
    >
    {!formState && <button onClick={showForm}>Create New product</button>}
     {formState && <ProductForm onCancelled={onProductSubmittedOrCancelled} createProduct={logProduct}></ProductForm>}
    </div>
  );
}

export default CreateProduct;
