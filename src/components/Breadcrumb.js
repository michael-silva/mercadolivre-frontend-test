import React, { memo } from "react";
import PropTypes from "prop-types";

import '../styles/Breadcrumb.scss';

const Breadcrumb = ({ path }) => (
  <ul className="breadcrumb-container">
    {path.map((step, i) =>
      <li key={i} className="step">&nbsp;{step}&nbsp;</li>
    )}
  </ul> 
);

Breadcrumb.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default memo(Breadcrumb);
