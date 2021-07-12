import axios from "axios"
import requests, {fetchMovie, fetchRecommendedMovies} from "../Requests";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthcmFiYW4tMDBAeWFuZGV4LmMiLCJpYXQiOjE2MjUyMjk5NTQsImV4cCI6MTYyNTIzMzU1NCwic3ViIjoiNSJ9.GJNW6SnekFiX4eY3JqZXLZ56idac1EkdG3XKkB4TIDE`;


const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { Authorization: `Bearer ${token}` }
});

// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

export default instance