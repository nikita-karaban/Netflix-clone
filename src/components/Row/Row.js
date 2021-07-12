import React, {useEffect, useState} from 'react';
import {Container, Poster, Posters, Title, Wrapper} from "./style";
import { useSelector} from "react-redux";
import MovieService from "../../model/services/moivieService";

function Row({title, isLargeRow, keyRow}) {
  const netflix = useSelector(store => store.movies.movieNetflixOriginal.dataRow)
  const topRated = useSelector(store => store.movies.moviesTopRated.data)
  const comedy = useSelector(store => store.movies.moviesComedy.data)
  const documentaries = useSelector(store => store.movies.moviesDocumentaries.data)
  const recommended = useSelector(store => store.movies.moviesRowRecommended.data)
  const [movies, setMovies] = useState()
  const service = new MovieService()


  // console.log(collection.getData())
  // console.log(service.findAll(movies))


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
    // console.log(movies)
  }, [keyRow, netflix, topRated, comedy, documentaries, recommended]);



  return (
    <Container>
      <Title>{title}</Title>
      <Posters>
        {service.findAll(movies)?.map(movie => (
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



