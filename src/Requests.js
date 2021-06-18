const API_KEY = 'ae1445d90303f322809a27f6606dd5e3'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`

}

export const fetchMovieTrailer = (id) => {
   return `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
}

export const fetchMovie = (id) => {
  return `/movie/${id}?api_key=${API_KEY}&language=en-US`
}

export const fetchSimilarMovies = (id) => {
  return `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
}

export const fetchRecommendedMovies = (id) => {
  return `/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
}

export const fetchSearchItem = (searchItem) => {
  return `/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${searchItem}`;

}


export default requests