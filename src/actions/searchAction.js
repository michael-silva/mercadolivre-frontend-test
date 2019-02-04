
import constants from '../constants';
import axios from 'axios';

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
    return axios.get(`/api/items?q=${query}`)
      .then(res => {
        const items = res.data.items;
        const categories = res.data.categories;
        dispatch(searchSuccessAction(items, categories));
      })
      .catch(e => dispatch(searchErrorAction(e)));
  };
};

export default searchActionAsync;