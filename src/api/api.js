import axios from "axios"
import requests, {fetchMovie, fetchRecommendedMovies} from "../Requests";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export const movieAPI = {
  getNetflixMovieOriginalsMovie() {
    return instance.get(requests.fetchNetflixOriginals)
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

export default instance