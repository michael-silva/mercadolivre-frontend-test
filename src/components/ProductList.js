import React from "react";
import PropTypes from "prop-types";
import ProductItem from "../components/ProductItem";

import '../styles/ProductList.scss';

const ProductList = ({ products, itemClick }) => (
  <div className="page-card">
    <ul className="product-list">
      {products.map((product, id) =>
        <ProductItem key={id} product={product} onClick={() => itemClick(product)}></ProductItem>
      )}
    </ul>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  itemClick: PropTypes.func.isRequired
};

export default ProductList;
