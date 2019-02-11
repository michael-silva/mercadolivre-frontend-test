export const CONFIG = {
  API_URL: process.env.API_URL || 'http://localhost:5000',
  GLOBAL_TITLE: 'Mercado Livre',
  DEFAULT_DESC: 'A maior Comunidade de compra e venda online da América Latina.',
}

export const CONDITIONS = {
  new: 'Nuevo',
  used: 'Usado'
}

const constants = {
  CHANGE_QUERY: 'CHANGE_QUERY',
  PRODUCT_GET_SUCCESS: 'PRODUCT_GET_SUCCESS',
  PRODUCT_GET_ERROR: 'PRODUCT_GET_ERROR',
  PRODUCT_SEARCH_SUCCESS: 'PRODUCT_SEARCH_SUCCESS',
  PRODUCT_SEARCH_ERROR: 'PRODUCT_SEARCH_ERROR',
  BREADCRUMB_SUCCESS: 'BREADCRUMB_SUCCESS',
  BREADCRUMB_ERROR: 'BREADCRUMB_ERROR',
};

export default constants;