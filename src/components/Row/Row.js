import React, {useEffect, useState} from 'react';
import {Container, Poster, Posters, Title, Wrapper} from "./style";
// import {getMoviesRow, getMoviesRowRecommended} from "../../redux/actions";
import { useSelector} from "react-redux";
// import store from "../../redux/redux-store";

function Row({title, isLargeRow, keyRow}) {
  // const dispatch = useDispatch();
  // let moviesR = useSelector(store => store.moviesRow.data);
  // let moviesRR = useSelector(store => store.moviesRowRecommended.data)
  const netflix = useSelector(store => store.movies.movieNetflixOriginal.dataRow)
  const topRated = useSelector(store => store.movies.moviesTopRated.data)
  const comedy = useSelector(store => store.movies.moviesComedy.data)
  const documentaries = useSelector(store => store.movies.moviesDocumentaries.data)
  const recommended = useSelector(store => store.movies.moviesRowRecommended.data)
  const [movies, setMovies] = useState()


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
        {movies?.map(movie => (
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



