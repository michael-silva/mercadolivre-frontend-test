import React from "react";
import PropTypes from "prop-types";
import shippingIcon from '../assets/ic_shipping.png';
import shippingIcon2x from '../assets/ic_shipping@2x.png.png';

import '../styles/ProductItem.scss';

const ProductItem = ({ product, onClick }) => (
  <li className="product-item" onClick={onClick}>
    <div className="picturebox">
      <img className="image" src={product.picture} alt="Imagem do produto" />
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
      <h3 className="extra">Completo único</h3>
    </div>
  </li>
);

/*ProductItem.propTypes = {
  onClick: PropTypes.func.isRequired,
}*/

export default ProductItem;
