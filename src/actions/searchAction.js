
import constants, { CONFIG } from '../constants';
import request from 'request-promise';

export const searchStartAction = () => {
  return { type: constants.PRODUCT_SEARCH_START };
}

export const searchSuccessAction = (items, categories) => {
  return {
    type: constants.PRODUCT_SEARCH_SUCCESS,
    categories,
    items,
  };
};

export const searchErrorAction = (error) => {
  return {
    type: constants.PRODUCT_SEARCH_ERROR,
    error,
  };
};

export const searchActionAsync = (query) => {
  return (dispatch, getState) => {
    dispatch(searchStartAction());
    return request.get(`${CONFIG.API_URL}/api/items?q=${query}`, { json: true })
      .then(data => {
        const items = data.items;
        const categories = data.categories;
        return dispatch(searchSuccessAction(items, categories));
      })
      .catch(e => dispatch(searchErrorAction(e)));
  };
};

export default searchActionAsync;