import getProductAction from './getProductAction';
import constants from '../constants';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from 'request-promise';
import sinon from 'sinon';

const item = { category: 'category' };

const mockStore = configureMockStore([ thunk ]);

describe('getProductAction', () => {

  afterEach(function () {
    request.get.restore();
  });

  it('creates PRODUCT_GET_SUCCESS after successfuly fetching one product', () => {
    sinon
      .stub(request, 'get')
      .returns(Promise.resolve({ item }));

    const expected1 = { type: constants.PRODUCT_GET_START };
    const expected2 = { type: constants.PRODUCT_GET_SUCCESS, item };

    const id = '123';
    const store = mockStore({ });

    return store.dispatch(getProductAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expected1);
        expect(actions[1]).toEqual(expected2);
      });
  });

  it('creates PRODUCT_GET_ERROR after erroring fetching products', () => {
    const error = new Error('Request failed with status code 500');
    sinon
      .stub(request, 'get')
      .returns(Promise.reject(error));

    const expected1 = { type: constants.PRODUCT_GET_START };
    const expected2 = { type: constants.PRODUCT_GET_ERROR, error };

    const id = '122';
    const store = mockStore({ products: [] });
  
    return store.dispatch(getProductAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expected1);
        expect(actions[1]).toEqual(expected2);
      });
  });
});
