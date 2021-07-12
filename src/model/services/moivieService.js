let Movie = require('../entites/movie')
let MoviesCollection = require('../entites/moviesCollection')
const MovieDetails = require('../entites/movieDetails')


class MovieService {


  findAll(data) {
    let results = [];
    let collection = new MoviesCollection(data);
    collection.data?.map(item => {
      return  results.push(new Movie(item.id, item.poster_path, item.backdrop_path, item.title))
    })
    return results
  }

  findId(data) {
    return new MovieDetails(data?.id, data?.poster_path, data?.backdrop_path, data?.name, data?.original_title, data?.overview)
  }
}

module.exports = MovieService;