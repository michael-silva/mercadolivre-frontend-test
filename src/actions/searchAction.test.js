import searchAction from './searchAction';
import types from '../constants';

describe('SearchAction', () => {
  const todoText = 'A todo';

  it('Should create an action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText,
    };

    expect(searchAction(todoText)).toEqual(expectedAction);
  });
});
