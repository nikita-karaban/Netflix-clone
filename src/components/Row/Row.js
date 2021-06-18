import React, {useEffect, useRef, useState} from 'react';
import {movieAPI} from "../../api/api";
import {Container, Poster, Posters, Title, Wrapper} from "./style";
import {getMoviesRow, getMoviesRowRecommended} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import store from "../../redux/redux-store";

function Row({title, fetchURL, isLargeRow, id = 0}) {

  const dispatch = useDispatch();
  // let moviesR = useSelector(store => store.moviesRow.data);
  // let moviesRR = useSelector(store => store.moviesRowRecommended.data)
  const [movies, setMovies] = useState([])

  const state = store.getState()




  useEffect(() => {
    if (id === 0) {
      dispatch(getMoviesRow(fetchURL));
    }
  }, [fetchURL])

  useEffect(() => {
    if (id) {

      dispatch(getMoviesRowRecommended(id))

    }
  }, [id])

  useEffect(() => {
    if(movies) {
      if (title === `You May Also Like`) {
        setTimeout( () => {
          setMovies(state.moviesRowRecommended.data)
        }, 600)
        console.log(movies)
      } else {
        setMovies(state.moviesRow.data)
      }
    }

    console.log(title)
  }, [id])


  // const mounted = useRef();
  // useEffect(() => {
  //   async function fetchMoviesRecommendations(id) {
  //     const res = await axios.get(fetchRecommendedMovies(id))
  //     setMovies(res.data.results)
  //     return res
  //   }
  //
  //   async function fetchMovies() {
  //     const res = await axios.get(fetchURL)
  //     setMovies(res.data.results)
  //     return res
  //   }
  //   if (!mounted.current) {
  //
  //     mounted.current = true;
  //   } else {
  //     // do componentDidUpdate logic
  //
  //     if (id) {
  //       fetchMoviesRecommendations(id)
  //     }else {
  //       fetchMovies()
  //     }
  //   }
  // }, [])

  // useEffect(() => {
  //   if(id === 0) {
  //     fetchMovies()
  //   }
  //   if (id > 0) {
  //     fetchMoviesRecommendations(id)
  //   }
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //     // setShowResults(false);
  //   }, 100);
  // }, [id])







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



