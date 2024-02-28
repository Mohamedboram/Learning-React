import React from "react";
import "./filterProduct.css";
function FilterProduct(props) {
  function availabilityFilter(event) {
    props.onFilterValueSelected(event.target.value);
  }

  return (
    <div className="filter-area">
      <select name="isAvailable" onChange={availabilityFilter}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>
  );
}

export default FilterProduct;
