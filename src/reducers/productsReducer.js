import constants from '../constants';

const initialState = {
  items: [],
  categories: [],
};

export default (state = initialState, action) => {
  const { type, error, categories, items, item } = action;
  switch (type) {
    case constants.PRODUCT_GET_SUCCESS:
      return  { items: [ item ], categories: [ item.category ] };
    case constants.PRODUCT_GET_ERROR:
      return  { ...initialState, error };
    case constants.PRODUCT_SEARCH_SUCCESS:
      return  { items, categories };
    case constants.PRODUCT_SEARCH_ERROR:
      return { ...initialState, error };
    default:
      return state;
  }
};
