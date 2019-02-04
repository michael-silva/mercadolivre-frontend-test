
import constants from '../constants';
import axios from 'axios';

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
    return axios.get(`/api/categories/${id}`)
      .then(res => {
        const { path } = res.data;
        dispatch(getCategorySuccessAction(path));
      })
      .catch(e => dispatch(getCategoryErrorAction(e)));
  };
};

export default getCategoryActionAsync;