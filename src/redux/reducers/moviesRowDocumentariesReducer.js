import {FETCH_ROW_DOCUMENTARIES} from "../actions/actionsType";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_ROW_DOCUMENTARIES:
      const data = action.payload
      return { ...state, data };
    default:
      return state;
  }
}