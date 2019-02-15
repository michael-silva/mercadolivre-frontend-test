import { getCategorySuccessAction, getCategoryErrorAction } from '../actions/getCategoryAction';
import breadcrumbReducer from './breadcrumbReducer';

describe('breadcrumbReducer', () => {
  it('Should get categories successfuly', () => {
    const initialState = {
      path: []
    };
    const path = ['cat 1'];
    const action = getCategorySuccessAction(path);
    const newState = breadcrumbReducer(initialState, action);

    expect(newState).toEqual({ path });
  });

  it('Should get categories erroring', () => {
    const initialState = {
      path: []
    };
    const error = new Error();
    const action = getCategoryErrorAction(error);
    const newState = breadcrumbReducer(initialState, action);

    expect(newState).toEqual({ error });
  });

  it('Should return initialState when action type was undefined', () => {
    const initialState = {
      text: ''
    };
    const action = {};
    const newState = breadcrumbReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
