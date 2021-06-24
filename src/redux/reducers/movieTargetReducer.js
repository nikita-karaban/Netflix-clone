import {FETCH_MOVIE_TARGET} from "../actions/actionsType";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE_TARGET:
      const data = action.payload
      return { ...state, data };
    default:
      return state;
  }
}