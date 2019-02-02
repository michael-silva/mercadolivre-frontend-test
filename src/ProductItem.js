import React from "react";
import shippingIcon from './Assets/ic_shipping.png';
import shippingIcon2x from './Assets/ic_shipping@2x.png.png';

import './ProductItem.scss';

const srcImage = 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/16351_03.jpg';
const ProductItem = ({ product }) => (
  <li className="product-item">
    <div className="picturebox">
      <img className="image" src={srcImage} alt="Imagem do produto" />
    </div>
    <div className="content">
      <h2 className="product-item-header">
        <span className="price">R$ 1.980</span>
        <span className="icon">
          <img className="image" src={shippingIcon} srcSet={`${shippingIcon2x} 2x`} alt="Icone" />
        </span>
        <span className="state">Capital Federal</span>
      </h2>
      <h1 className="name">Deco Reverse Sombrero Oxford</h1>
      <h3 className="extra">Completo único</h3>
    </div>
  </li>
);

export default ProductItem;
