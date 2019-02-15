import React, { memo } from 'react';
import loadingIcon from '../assets/loadingIcon.svg';

import '../styles/Loading.scss';

const Loading = () => (
  <div className="loading-content">
    <img src={loadingIcon} className="icon" alt="carregando" />
  </div>
);

export default memo(Loading);
