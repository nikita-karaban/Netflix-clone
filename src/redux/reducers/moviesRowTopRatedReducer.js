import {FETCH_ROW_TOP_RATED} from "../actions/actionsType";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_ROW_TOP_RATED:
      const data = action.payload
      return { ...state, data };
    default:
      return state;
  }
}