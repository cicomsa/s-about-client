import { ADD_TEXT, REMOVE_TEXT, GET_TEXTS } from '../actions/index';

export default (state = [], action) => {
  switch (action.type) {
    case GET_TEXTS:
      return state;
    case ADD_TEXT:
      return state.concat(action.payload);
    case REMOVE_TEXT:
      return state.filter(item => item !== action.payload);
    default:
      return state;
  }
};
