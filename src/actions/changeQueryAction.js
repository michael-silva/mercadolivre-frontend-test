import constants from '../constants';

const changeQueryAction = (query) => {
  return {
    type: constants.CHANGE_QUERY,
    query,
  };
};

export default changeQueryAction;