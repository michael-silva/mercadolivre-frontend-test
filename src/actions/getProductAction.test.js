import getProductAction from './getProductAction';
import constants from '../constants';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

const item = { category: 'category' };

const mockStore = configureMockStore([ thunk ]);

describe('getProductAction', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates PRODUCT_GET_SUCCESS after successfuly fetching one product', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { item },
      });
    });

    const expectedAction = { type: constants.PRODUCT_GET_SUCCESS, item };

    const id = '123';
    const store = mockStore({ });

    return store.dispatch(getProductAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });

  it('creates PRODUCT_GET_ERROR after erroring fetching products', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const expectedAction = { type: constants.PRODUCT_GET_ERROR, error: new Error('Request failed with status code 500') };

    const id = '122';
    const store = mockStore({ products: [] });
  
    return store.dispatch(getProductAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });
});
