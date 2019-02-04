import constants from '../constants';
import axios from 'axios';

export const getProductSuccessAction = (item) => {
  return {
    type: constants.PRODUCT_GET_SUCCESS,
    item,
  };
};

export const getProductErrorAction = (error) => {
  return {
    type: constants.PRODUCT_GET_ERROR,
    error,
  };
};

export const getProductActionAsync = (id) => {
  return (dispatch, getState) => {
    return axios.get(`/api/items/${id}`)
      .then(res => {
        const item = res.data.item;
        dispatch(getProductSuccessAction(item));
      })
      .catch(e => dispatch(getProductErrorAction(e)));
  };
};

export default getProductActionAsync;