import constants, { CONFIG } from '../constants';
import request from 'request-promise';

export const getProductStartAction = () => {
  return { type: constants.PRODUCT_GET_START };
}

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
    dispatch(getProductStartAction());
    return request.get(`${CONFIG.API_URL}/api/items/${id}`, { json: true })
      .then(data => {
        const item = data.item;
        return dispatch(getProductSuccessAction(item));
      })
      .catch(e => dispatch(getProductErrorAction(e)));
  };
};

export default getProductActionAsync;
