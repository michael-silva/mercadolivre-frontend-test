import React, { memo } from "react";

import '../styles/Error.scss';

const Error = () => (
  <div className="error-content">
    <div className="content">
      <h2 className="title">Ops... Ocorreu um erro.</h2>
      <p className="description">Atualize a página e tente novamente.</p>
    </div>
  </div>
);

export default memo(Error);
