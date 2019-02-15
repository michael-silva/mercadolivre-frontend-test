import { combineReducers } from 'redux';

import products from './productsReducer';
import breadcrumb from './breadcrumbReducer';
import query from './queryReducer';

export default combineReducers({
  products,
  breadcrumb,
  query,
});
