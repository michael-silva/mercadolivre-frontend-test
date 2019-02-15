import React, { memo } from "react";

import '../styles/Home.scss';

const Home = () => (
  <div className="page-card">
    <div className="home-content">
      <h2 className="title">Bem vindo a maior comunidade de compra e venda online da América Latina.</h2>
    </div>
  </div>
);

export default memo(Home);
