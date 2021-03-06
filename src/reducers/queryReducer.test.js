import changeQueryAction from '../actions/changeQueryAction';
import queryReducer from './queryReducer';

describe('queryReducer', () => {
  it('Should change query text', () => {
    const initialState = {
      text: ''
    };
    const text = 'temp';
    const action = changeQueryAction(text);
    const newState = queryReducer(initialState, action);

    expect(newState).toEqual({ text });
  });

  it('Should return initialState when action type was undefined', () => {
    const initialState = {
      text: ''
    };
    const action = {};
    const newState = queryReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});