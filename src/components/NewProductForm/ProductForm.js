import React from "react";
import { useState } from "react";
function ProductForm(props) {
    let [pName,updateName]= useState('')
    let [pPrice,updatePrice]= useState('')
    let [pDesc,updateDesc]= useState('')
    let [pAvailability,updateAvailability]= useState('')
    let [pImage,updateImage]= useState('')
    /* let [userInput,updateUserInput]= useState({
        pName:'',
        pPrice:'',
        pDesc:'',
        pAvailability:'',
        pImage:'',
    }); */
  function nameInputHandler(event) {
    updateName(event.target.value)
    // note preferable to use this method
    /* updateUserInput({
        ...userInput,
        pName:(event.target.value)

    }); */

    /* updateUserInput((prevState)=>{
        return {...prevState,pName:event.target.value}


    }) */
  }
  function priceInputHandler(event) {
    updatePrice(event.target.value)
    /* updateUserInput({
        ...userInput,
        pPrice:(event.target.value)
    }); */

    /* updateUserInput((prevState)=>{
        return {...prevState, pPrice:event.target.value}
    }) */
  }
  function descInputHandler(event) {
    updateDesc(event.target.value)
    /* updateUserInput({
        ...userInput,
        pDesc:(event.target.value)
    }) */

    
  }
  function availabilityInputHandler(event) {
    updateAvailability(event.target.checked);
    /* updateUserInput({
        ...userInput, 
        pAvailability:(event.target.checked)

    }); */
   /*  updateUserInput((prevState)=>{
        return {...prevState,pAvailability:event.target.checked}
    }) */
  }
  function imgInputHandler(event) {
    updateImage(event.target.value)
    //1)
    /* updateUserInput({
        ...userInput, 
        pImage:(event.target.value)
    }); */
    //2)

   /*  updateUserInput((prevState)=>{
        return {...prevState, pImage:event.target.value}
    }) */
  }
  function handleSubmit(event){
    event.preventDefault();
    let adminProduct = {
    pName:pName,
    desc:pDesc,
    price:Number(pPrice),
    isAvailable:pAvailability,
    image:pImage


    }
    props.createProduct(adminProduct);

    updateName('');
    updatePrice('');
    updateAvailability('');
    updateDesc('');
    updateImage(''); 
    
    props.onCancelled();
  
  }
  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-md-6">
        <label for="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={pName}

          onChange={nameInputHandler}

        />
      </div>
      <div className="col-md-6">
        <label for="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          value={pPrice}
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label for="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDesc}
          onChange={descInputHandler}
        />
      </div>

      <div class="form-check form-switch">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailability}
          onChange={availabilityInputHandler}
        />
        <label class="form-check-label" for="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label for="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImage}
          onChange={imgInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary" >
        Add Product
      </button>
      <button type="button" onClick={props.onCancelled}>Cancel Button</button>
    </form>
  );
}

export default ProductForm;
