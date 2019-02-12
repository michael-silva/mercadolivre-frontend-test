import searchAction from './searchAction';
import constants from '../constants';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from 'request-promise';
import sinon from 'sinon';

const items = [{}, {}, {}];
const categories = [{}, {}];

const mockStore = configureMockStore([thunk]);

describe('SearchAction', () => {

  afterEach(function () {
    request.get.restore();
  });

  it('creates SEARCH_PRODUCTS_SUCCESS after successfuly fetching products', () => {
    sinon
      .stub(request, 'get')
      .returns(Promise.resolve({ items, categories }));

    const expectedAction = { type: constants.PRODUCT_SEARCH_SUCCESS, items, categories };

    const query = 'test';
    const store = mockStore({ products: [] });

    return store.dispatch(searchAction(query))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });

  it('creates SEARCH_PRODUCTS_ERROR after erroring fetching products', () => {
    const error = new Error('Request failed with status code 500');
    sinon
      .stub(request, 'get')
      .returns(Promise.reject(error));

    const expectedAction = { type: constants.PRODUCT_SEARCH_ERROR, error };

    const query = 'test';
    const store = mockStore({ products: [] });

    return store.dispatch(searchAction(query))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });
});
