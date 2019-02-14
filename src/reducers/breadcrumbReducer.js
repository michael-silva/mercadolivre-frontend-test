import constants from '../constants';

const initialState = {
  path: [],
};

export default (state = initialState, action) => {
  const { path, error } = action;
  switch (action.type) {
    case constants.BREADCRUMB_START:
      return  { ...initialState, fetching: true };
    case constants.BREADCRUMB_SUCCESS:
      return  { path };
    case constants.BREADCRUMB_ERROR:
      return { path, error  };
    default:
      return state;
  }
};
