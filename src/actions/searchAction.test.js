import searchAction from './searchAction';
import constants from '../constants';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

const items = [{}, {}, {}];
const categories = [{}, {}];

const mockStore = configureMockStore([ thunk ]);

describe('SearchAction', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates SEARCH_PRODUCTS_SUCCESS after successfuly fetching products', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { items, categories },
      });
    });

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
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const expectedAction = { type: constants.PRODUCT_SEARCH_ERROR, error: new Error('Request failed with status code 500') };

    const query = 'test';
    const store = mockStore({ products: [] });
  
    return store.dispatch(searchAction(query))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });
});
