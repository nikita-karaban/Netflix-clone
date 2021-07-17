import {instance} from "./Axios"
import requests, {fetchMovie, fetchRecommendedMovies} from "../Requests";


export const movieAPI = {
  getNetflixMovieOriginalsMovie() {
    return instance.get(requests.fetchNetflixOriginals)
  },
  getTopRated() {
    return instance.get(requests.fetchTopRated)
  },
  getComedy() {
    return instance.get(requests.fetchComedyMovies)
  },
  getDocumentaries() {
    return instance.get(requests.fetchDocumentaries)
  },
  getMovies(fetchURL) {
    return instance.get(fetchURL)
  },
  getRecommendedMovies(id) {
    return instance.get(fetchRecommendedMovies(id))
  },
  getMovieTarget(id) {
    return instance.get(fetchMovie(id))
  }
}
