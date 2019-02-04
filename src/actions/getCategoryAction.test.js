import getCategoryAction from './getCategoryAction';
import constants from '../constants';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';

const path = ['test', 'test'];

const mockStore = configureMockStore([ thunk ]);

describe('getCategoryAction', () => {

  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });

  it('creates BREADCRUMB_SUCCESS after successfuly fetching one product', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: { path },
      });
    });

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
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 500,
        response: {},
      });
    });

    const expectedAction = { type: constants.BREADCRUMB_ERROR, error: new Error('Request failed with status code 500') };

    const id = '122';
    const store = mockStore({ products: [] });
  
    return store.dispatch(getCategoryAction(id))
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual(expectedAction);
      });
  });
});
