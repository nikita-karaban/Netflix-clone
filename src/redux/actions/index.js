import {movieAPI} from "../../api/api";
import {
  FETCH_MOVIE_TARGET,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_ROW_MOVIES,
  FETCH_ROW_MOVIES_RECOMMENDED
} from "./actionsType";

export function getMovieNetflixOriginals(){
  return (dispatch) => {
    movieAPI.getNetflixMovieOriginalsMovie().then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_NETFLIX_ORIGINALS, payload: response.data.results});
    })
  }
}

export function getMoviesRow(fetchURL){
  return (dispatch) => {
    movieAPI.getMovies(fetchURL).then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_ROW_MOVIES, payload: response.data.results});
    })
  }
}

export function getMoviesRowRecommended(id){
  return (dispatch) => {
    movieAPI.getRecommendedMovies(id).then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_ROW_MOVIES_RECOMMENDED, payload: response.data.results});
    })
  }
}

export function getMovieTarget(id) {
  return (dispatch) => {
    movieAPI.getMovieTarget(id).then(response => {
      if(response.status === 200)
        dispatch({type: FETCH_MOVIE_TARGET, payload: response.data});
    })
  }
}