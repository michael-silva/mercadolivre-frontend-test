import React from "react";
import PropTypes from "prop-types";
import pureComponent from '../shared/pureComponent';

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

export default pureComponent(Breadcrumb);
