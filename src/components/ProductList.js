import React from "react";
import ProductItem from "../components/ProductItem";

import '../styles/ProductList.scss';

const ProductList = ({ products }) => (
  <div className="page-card">
    <ul className="product-list">
      {products.map((product, id) =>
        <ProductItem key={id} product={product}></ProductItem>
      )}
    </ul>
  </div>
);

export default ProductList;
