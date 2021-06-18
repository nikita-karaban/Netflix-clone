import {FETCH_MOVIE_TARGET} from "../actions/actionsType";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MOVIE_TARGET:
      // console.log(action.payload)
      const data = action.payload
      return { ...state, data };
    default:
      return state;
  }
}