import React from "react";

const ProductList = (props) => {
  return (
    <div>
      <h1>{props.info.title}</h1>
      <h4>{props.selectedCategory}</h4>
    </div>
  );
};

export default ProductList;
