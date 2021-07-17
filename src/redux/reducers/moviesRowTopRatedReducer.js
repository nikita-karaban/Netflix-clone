import {FETCH_ROW_TOP_RATED} from "../actions/actionsType";
import Movie from "../../model/movie";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_ROW_TOP_RATED:
      return { ...state, data: action.payload?.map(item => new Movie(item.id, item.poster_path, item.backdrop_path, item.title)) };
    default:
      return state;
  }
}