import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../containers/ImageContainer';

import '../styles/ProductDetail.scss';

const ProductDetail = ({ product }) => (
  <div className="page-card">
    <div className="row row-block-6">
      <div className="col-sm-7">
        <div className="product-image">
          <ImageContainer className="image" src={product.picture} alt={product.title} />
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-details">
          <p className="headline">{product.condition_label} - {product.sold_quantity} vendidos</p>
          <h1 className="name">{product.title}</h1>
          <h2 className="price">{product.price.amount_label} <span className="cents">{product.price.decimals_label}</span></h2>
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
          <p className="description" dangerouslySetInnerHTML={{ __html: product.description }}></p>
        </div>
      </div>
    </div>
  </div>
);

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default memo(ProductDetail);
