import React, { memo } from "react";

import '../styles/ProductList.scss';

const ProductListEmpty = () => (
  <div className="page-card">
    <ul className="product-list -empty">
      <li className="product-item">
        <div className="content">
          <h1 className="name">Não encontramos resultados para sua busca.</h1>
        </div>
      </li>
    </ul>
  </div>
);

export default memo(ProductListEmpty);
