import {
  FETCH_MOVIE_TARGET,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_ROW_NETFLIX_ORIGINALS,
  REMOVE_DATA
} from "../actions/actionsType";
import MovieDetails from "../../model/movieDetails";
import Movie from "../../model/movie";

export default function foo(state = {}, action) {
  switch (action.type) {
    case FETCH_NETFLIX_ORIGINALS:
      // console.log(action.payload)
      const data = action.payload[
        Math.floor(Math.random() * action.payload.length - 1)
        ];
      return { ...state, data: new MovieDetails(data.id, data.poster_path, data.backdrop_path, data.name, data.original_title, data.overview) };
    case FETCH_ROW_NETFLIX_ORIGINALS:
      return { ...state, dataRow: action.payload?.map(item => new Movie(item.id, item.poster_path, item.backdrop_path, item.title))};
    case FETCH_MOVIE_TARGET:
      return { ...state, data: action.payload };
    case REMOVE_DATA:
      // console.log(state)
      return state = {}
    default:
      return state;
  }
}

