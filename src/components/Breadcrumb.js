import React from "react";

import '../styles/Breadcrumb.scss';

const Breadcrumb = ({ path }) => (
  <ul className="breadcrumb-container">
    {path.map((step, i) =>
      <li key={i} className="step">&nbsp;{step}&nbsp;</li>
    )}
  </ul> 
);

export default Breadcrumb;
