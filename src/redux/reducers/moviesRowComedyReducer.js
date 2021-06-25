import {FETCH_ROW_COMEDY} from "../actions/actionsType";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_ROW_COMEDY:
      const data = action.payload
      return { ...state, data };
    default:
      return state;
  }
}