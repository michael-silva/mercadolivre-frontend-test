
import constants, { CONFIG } from '../constants';
import request from 'request-promise';

export const getCategorySuccessAction = (path) => {
  return {
    type: constants.BREADCRUMB_SUCCESS,
    path,
  };
};

export const getCategoryErrorAction = (error) => {
  return {
    type: constants.BREADCRUMB_ERROR,
    error,
  };
};

export const getCategoryActionAsync = (id) => {
  return (dispatch, getState) => {
    return request.get(`${CONFIG.API_URL}/api/categories/${id}`, { json: true })
      .then(data => {
        const { path } = data;
        dispatch(getCategorySuccessAction(path));
      })
      .catch(e => dispatch(getCategoryErrorAction(e)));
  };
};

export default getCategoryActionAsync;