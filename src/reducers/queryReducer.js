import constants from '../constants';

const initialState = {
  text: '',
};

export default (state = initialState, action) => {
  const { query } = action;
  switch (action.type) {
    case constants.CHANGE_QUERY:
      return  { text: query };
    default:
      return state;
  }
};
