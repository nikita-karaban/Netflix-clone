import React, {useEffect} from 'react';
import {Poster, Wrapper} from "../Row/style";

function SearchItems({movies, history}) {
  useEffect(() => {
    console.log(movies)
  })

  useEffect(() => {
      async function fetchData() {
        console.log(history)
        if (history?.location) {
          console.log(history)
          const {movieRows} = history.location;
          if (movieRows)
            // await setMovies(movieRows);
          console.log(movieRows)
        }
      }
    }
  )

  return (
    <div>
      {movies?.map(movie => (
        ((movie.backdrop_path)) && (
          <Wrapper to={`/browse/${movie.id}`} key={movie.id}>
            <Poster
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.name}
            />
          </Wrapper>
        )))
      }
    </div>
  );
}

export default SearchItems;