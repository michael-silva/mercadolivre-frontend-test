import React from "react";

import './Breadcrumb.scss';

//TODO: remove null steps validation
const Breadcrumb = ({ steps }) => (
  <ul className="breadcrumb-container">
    {(steps || []).map((step) =>
      <li className="step">&nbsp;{step}&nbsp;</li>
    )}
  </ul> 
);

export default Breadcrumb;
