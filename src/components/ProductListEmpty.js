import React, { memo } from 'react';

import '../styles/ProductList.scss';

const ProductListEmpty = () => (
  <div className="page-card">
    <div className="product-list -empty">
      <h2 className="title">Não encontramos resultados para sua busca.</h2>
      <p className="description">Verifique se o termo buscado esta correto, e tente novamente.</p>
    </div>
  </div>
);

export default memo(ProductListEmpty);
