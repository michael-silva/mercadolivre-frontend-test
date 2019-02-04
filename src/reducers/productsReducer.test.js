import { searchSuccessAction, searchErrorAction } from '../actions/searchAction';
import { getProductSuccessAction, getProductErrorAction } from '../actions/getProductAction';
import productsReducer from './productsReducer';

describe('productsReducer', () => {
  it('Should search products successfuly', () => {
    const initialState = {
      items: []
    };
    const items = [{ id: 1 }];
    const categories = ['category'];
    const action = searchSuccessAction(items, categories);
    const newState = productsReducer(initialState, action);

    expect(newState).toEqual({ items, categories });
  });

  it('Should search products erroring', () => {
    const initialState = {
      items: []
    };
    const error = new Error();
    const action = searchErrorAction(error);
    const newState = productsReducer(initialState, action);

    expect(newState).toEqual({ items: [], categories: [], error });
  });

  it('Should get products successfuly', () => {
    const initialState = {
      items: []
    };
    const item = { id: 1, category: 'category' };
    const action = getProductSuccessAction(item);
    const newState = productsReducer(initialState, action);

    expect(newState).toEqual({ items: [item], categories: [item.category] });
  });

  it('Should get products erroring', () => {
    const initialState = {
      items: []
    };
    const error = new Error();
    const action = getProductErrorAction(error);
    const newState = productsReducer(initialState, action);

    expect(newState).toEqual({ items: [], categories: [], error });
  });
});