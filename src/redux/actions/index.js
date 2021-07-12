import {movieAPI} from "../../api/api";
import {
  FETCH_MOVIE_TARGET,
  FETCH_NETFLIX_ORIGINALS, FETCH_ROW_COMEDY, FETCH_ROW_DOCUMENTARIES,
  FETCH_ROW_MOVIES,
  FETCH_ROW_MOVIES_RECOMMENDED, FETCH_ROW_NETFLIX_ORIGINALS, FETCH_ROW_TOP_RATED, LOGIN_USER, LOGOUT_USER, REMOVE_DATA
} from "./actionsType";
import Cookie from "js-cookie";
import {authAxios} from "../../Axios";


export function getMovieNetflixOriginals(){
  return (dispatch) => {
    movieAPI.getNetflixMovieOriginalsMovie().then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_NETFLIX_ORIGINALS, payload: response.data.results});
    })
  }
}

export function getMovieRowNetflixOriginals(){
  return (dispatch) => {
    movieAPI.getNetflixMovieOriginalsMovie().then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_ROW_NETFLIX_ORIGINALS, payload: response.data.results});
    })
  }
}

export function fetchTopRated() {
  return (dispatch) => {
    movieAPI.getTopRated().then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_ROW_TOP_RATED, payload: response.data.results});
    })
  }
}

export function fetchComedy() {
  return (dispatch) => {
    movieAPI.getComedy().then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_ROW_COMEDY, payload: response.data.results});
    })
  }
}

export function fetchDocumentaries() {
  return (dispatch) => {
    movieAPI.getDocumentaries().then( response => {
      if(response.status === 200)
        dispatch({type: FETCH_ROW_DOCUMENTARIES, payload: response.data.results});
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

export const fetchUserPost = (user, history) => {
  return (dispatch) => {
    // axios.post("http://localhost:3005/register", user)
    authAxios.post("/register", user)
      .then((res) => {
        console.log(res)
        Cookie.set("accessToken", res.data.accessToken);
        dispatch({type: LOGIN_USER, payload: res.config.data});
        history.push("/browse")
      }).catch((err) => {
      console.log(err);
    })
  }
}

export const fetchUserLogin = (user, history) => {
  return (dispatch) => {
    authAxios.post("/login", user)
      .then((res) => {
        Cookie.set("accessToken", res.data.accessToken);
        dispatch({type: LOGIN_USER, payload: res.config.data});
        history.push("/browse")
      }).catch((err) => {
        console.log(err);
    })
  }
}

export const fetchIsAuth = (history) => {

  return async (dispatch) => {
    const tokenStr = Cookie.get("accessToken")
    await authAxios.get("/auth", { headers: {"Authorization" : `Bearer ${tokenStr}`}}).then((res) => {
    }).catch((err) => {
      if(err.response.status === 401) {
        history.push("/signin")
        dispatch({type: LOGOUT_USER})
        Cookie.remove("accessToken")
      }
    })
  }
}

export function DeleteData() {
  return {
    type: REMOVE_DATA
  }
}