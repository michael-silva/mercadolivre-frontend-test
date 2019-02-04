import React from "react";
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

/*
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
*/

export default ProductList;
