import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ImageContainer from '../containers/ImageContainer';
import shippingIcon from '../assets/ic_shipping.png';
import shippingIcon2x from '../assets/ic_shipping@2x.png.png';

import '../styles/ProductItem.scss';

const ProductItem = ({ product, onClick }) => (
  <li className="product-item" onClick={onClick}>
    <div className="picturebox">
      <ImageContainer className="image" src={product.picture} alt={product.title} />
    </div>
    <div className="content">
      <h2 className="product-item-header">
        <span className="price">{product.price.amount_label} <span className="cents">{product.price.decimals_label}</span></span>
        {product.free_shipping
          ? <span className="icon"><img className="image" src={shippingIcon} srcSet={`${shippingIcon2x} 2x`} alt="Entrega grátis" /></span>
          : <></>}
        <span className="state">{product.state}</span>
      </h2>
      <h1 className="name">{product.title}</h1>
    </div>
  </li>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    free_shipping: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    price: PropTypes.shape({
      amount_label: PropTypes.string.isRequired,
      decimals_label: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ProductItem);
