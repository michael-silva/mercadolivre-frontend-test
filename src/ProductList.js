import React from "react";
import ProductItem from "./ProductItem";

import './ProductList.scss';

//TODO: remove null products validation
const ProductList = ({ products }) => (
  <div className="page-card">
    <ul className="product-list">
      {(products || [{}, {}, {}]).map((product) =>
        <ProductItem {...product}></ProductItem>
      )}
    </ul>
  </div>
);

export default ProductList;
