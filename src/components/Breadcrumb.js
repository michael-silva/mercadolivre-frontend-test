import React from "react";

import '../styles/Breadcrumb.scss';

const Breadcrumb = ({ path }) => (
  <ul className="breadcrumb-container">
    {path.map((step) =>
      <li className="step">&nbsp;{step}&nbsp;</li>
    )}
  </ul> 
);

export default Breadcrumb;
