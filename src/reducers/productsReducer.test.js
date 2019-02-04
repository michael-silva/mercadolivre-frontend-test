import { productsReducer, initialState } from './productsReducer';

describe('Reducer', () => {
  it('Should return the initial state when no action passed', () => {
    expect(productsReducer(undefined, {})).toEqual(initialState);
  });
});