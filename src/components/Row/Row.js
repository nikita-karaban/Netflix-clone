import React, {useEffect, useState} from 'react';
import {Container, Poster, Posters, Title, Wrapper} from "./style";
import { useSelector} from "react-redux";
import Movie from "../../model/entites/movie";

function Row({title, isLargeRow, keyRow}) {
  const netflix = useSelector(store => store.movies.movieNetflixOriginal.dataRow)
  const topRated = useSelector(store => store.movies.moviesTopRated.data)
  const comedy = useSelector(store => store.movies.moviesComedy.data)
  const documentaries = useSelector(store => store.movies.moviesDocumentaries.data)
  const recommended = useSelector(store => store.movies.moviesRowRecommended.data)
  const [movies, setMovies] = useState()

  const moviesDataStructure = movies?.map(item => new Movie(item.id, item.poster_path, item.backdrop_path, item.title)
  )


  useEffect(() => {
    if(keyRow === `Netflix`){
      setMovies(netflix)
    }
    if(keyRow === `Top`){
      setMovies(topRated)
    }
    if(keyRow === `Comedy`){
      setMovies(comedy)
    }
    if(keyRow === `Documentaries`){
      setMovies(documentaries)
    }
    if(keyRow === `recommended`) {
      setMovies(recommended)
      console.log(recommended)
    }
  }, [keyRow, netflix, topRated, comedy, documentaries, recommended]);



  return (
    <Container>
      <Title>{title}</Title>
      <Posters>
        {moviesDataStructure?.map(movie => (
          ((isLargeRow && movie.poster_path) ||
            (movie.backdrop_path)) && (
            <Wrapper to={`/browse/${movie.id}`} key={movie.id}>
              <Poster
                className={`${isLargeRow && "posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            </Wrapper>
          )))
        }
      </Posters>
    </Container>
  );
}

export default Row;



