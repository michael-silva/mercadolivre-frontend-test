import React, { memo } from 'react';
import PropTypes from 'prop-types';

import '../styles/Breadcrumb.scss';

const Breadcrumb = ({ path, loading }) => (
  <ul className={`breadcrumb-container ${loading ? '-loading' : ''}`}>
    {loading ? <></> : path.map((step) =>
      <li key={step} className="step">&nbsp;{step}&nbsp;</li>
    )}
  </ul>
);

Breadcrumb.propTypes = {
  path: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  loading: PropTypes.bool.isRequired
};

export default memo(Breadcrumb);
