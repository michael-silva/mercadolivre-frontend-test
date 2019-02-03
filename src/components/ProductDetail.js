import React from "react";

import '../styles/ProductDetail.scss';

const ProductDetail = ({ product }) => (
  <div className="page-card">
    <div className="row row-block-6">
      <div className="col-sm-7">
        <div className="product-image">
          <img className="image" src={product.picture} alt="Imagem do produto" />
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-details">
          <p className="headline">{product.condition === 'new' ? 'Novo' : 'Usado'} - {product.sold_quantity} vendidos</p>
          <h1 className="name">{product.title}</h1>
          <h2 className="price">R$ {product.price.amount},{product.price.decimals}</h2>
          <button className="button">Comprar</button>
        </div>
      </div>
    </div>
    <div className="row row-offset-1">
      <div className="col-sm-7">
        <div className="product-description">
          <div className="header">
            <h1 className="title">Descrição do produto</h1>
          </div>
          <p className="description">{product.description}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;