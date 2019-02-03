import React from "react";
import shippingIcon from './Assets/ic_shipping.png';
import shippingIcon2x from './Assets/ic_shipping@2x.png.png';

import './ProductItem.scss';

const ProductItem = ({ product }) => (
  <li className="product-item">
    <div className="picturebox">
      <img className="image" src={product.picture} alt="Imagem do produto" />
    </div>
    <div className="content">
      <h2 className="product-item-header">
        <span className="price">R$ {product.price.amount},{product.price.decimals}</span>
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

export default ProductItem;
