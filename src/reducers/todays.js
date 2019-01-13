import { ADD_TODAYS, GET_TODAYS, REMOVE_TODAYS } from '../actions/index';

export default function(state = [], { type, payload }) {
  switch (type) {
    case GET_TODAYS:
      return payload;
    case ADD_TODAYS:
      return state.concat(payload);
    case REMOVE_TODAYS:
      return state.filter(todays => todays.id !== payload);
    default:
      return state;
  }
}
