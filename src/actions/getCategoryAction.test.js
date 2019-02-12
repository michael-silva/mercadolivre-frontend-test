import getCategoryAction from './getCategoryAction';
import constants from '../constants';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import request from 'request-promise';
import sinon from 'sinon';

const path = ['test', 'test'];

const mockStore = configureMockStore([ thunk ]);

describe('getCategoryAction', () => {

  afterEach(function () {
    request.get.restore();
  });

  it('creates BREADCRUMB_SUCCESS after successfuly fetching one product', () => {
    sinon
      .stub(request, 'get')
      .returns(Promise.resolve({ path }));

    const expectedAction = { type: constants.BREADCRUMB_SUCCESS, path };

    const id = '123';
    const store = mockStore({ });

    return store.dispatch(getCategoryAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });

  it('creates BREADCRUMB_ERROR after erroring fetching products', () => {
    const error = new Error('Request failed with status code 500');
    sinon
      .stub(request, 'get')
      .returns(Promise.reject(error));

    const expectedAction = { type: constants.BREADCRUMB_ERROR, error };

    const id = '122';
    const store = mockStore({ products: [] });
  
    return store.dispatch(getCategoryAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });
});
