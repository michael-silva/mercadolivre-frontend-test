import React from "react";

import './ProductDetail.scss';

const srcImage = 'http://i.mlcdn.com.br/portaldalu/fotosconteudo/16351_03.jpg';
const productDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
const ProductDetail = ({ product }) => (
  <div className="page-card">
    <div className="row row-block-6">
      <div className="col-sm-7">
        <div className="product-image">
          <img className="image" src={srcImage} alt="Imagem do produto" />
        </div>
      </div>
      <div className="col-sm-4">
        <div className="product-details">
          <p className="headline">Novo - 234 vendidos</p>
          <h1 className="name">Deco Reverse<br />Sombrero Oxford</h1>
          <h2 className="price">R$ 1.980</h2>
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
          <p className="description">{productDescription}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ProductDetail;
