
import constants from '../constants';
import axios from 'axios';

const getCategorySuccessAction = (path) => {
  return {
    type: constants.BREADCRUMB_SUCCESS,
    path,
  };
};

const getCategoryErrorAction = (error) => {
  return {
    type: constants.BREADCRUMB_ERROR,
    error,
  };
};

const getCategoryActionAsync = (id) => {
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