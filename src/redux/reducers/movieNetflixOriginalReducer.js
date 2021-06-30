import {
  FETCH_MOVIE_TARGET,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_ROW_NETFLIX_ORIGINALS,
  REMOVE_DATA
} from "../actions/actionsType";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_NETFLIX_ORIGINALS:
      // console.log(action.payload)
      const data = action.payload[
        Math.floor(Math.random() * action.payload.length - 1)
        ];
      return { ...state, data };
    case FETCH_ROW_NETFLIX_ORIGINALS:
      const dataRow = action.payload;
      return { ...state, dataRow };
    case FETCH_MOVIE_TARGET:
      return { ...state, data: action.payload };
    case REMOVE_DATA:
      // console.log(state)
      return state = {}
    default:
      return state;
  }
}

