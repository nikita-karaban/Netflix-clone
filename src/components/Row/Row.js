import React, {useEffect, useState} from 'react';
// import {useParams} from "react-router-dom";
import {Container, Poster, Posters, Title, Wrapper} from "./style";
// import {getMoviesRow, getMoviesRowRecommended} from "../../redux/actions";
import { useSelector} from "react-redux";
// import store from "../../redux/redux-store";

function Row({title, isLargeRow, keyRow}) {
  // const {id} = useParams();
  // const dispatch = useDispatch();
  // let moviesR = useSelector(store => store.moviesRow.data);
  // let moviesRR = useSelector(store => store.moviesRowRecommended.data)
  const netflix = useSelector(store => store.movies.movieNetflixOriginal.dataRow)
  const topRated = useSelector(store => store.movies.moviesTopRated.data)
  const comedy = useSelector(store => store.movies.moviesComedy.data)
  const documentaries = useSelector(store => store.movies.moviesDocumentaries.data)
  // const state = store.getState()
  const [movies, setMovies] = useState()
  // const movies = []


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
    // console.log(movies)
  }, [keyRow, netflix, topRated, comedy, documentaries]);



  // useEffect(() => {
  //   id ?  dispatch(getMoviesRowRecommended(id)) :  dispatch(getMoviesRow(fetchURL));
  // }, [dispatch, id, fetchURL])
  //
  //
  // useEffect(() => {
  //   async function fetchData() {
  //     if (!id) {
  //       await setMovies(state.movies.moviesRow.data)
  //       // console.log(movies)
  //       // debugger
  //     } else {
  //       if (title === `You May Also Like`) {
  //         setTimeout(() => {
  //           setMovies(state.movies.moviesRowRecommended.data)
  //         }, 700)
  //         // debugger
  //       }
  //     }
  //   }
  //
  //   fetchData()
  //   // console.log(movies)
  // }, [fetchURL, id, title, state.movies.moviesRowRecommended.data, state.movies.moviesRow.data])

  // useEffect(() => {
  //   if (!id) {
  //     setMovies(state.moviesRow.data)
  //   } else {
  //     if (title === `You May Also Like`) {
  //       setTimeout(() => {
  //         setMovies(state.moviesRowRecommended.data)
  //       }, 600)
  //       console.log(movies)
  //     }
  //   }
  //
  // }, [])

  // useEffect(async () => {
  //   if (id) {
  //     await dispatch(getMoviesRowRecommended(id))
  //     console.log(title)
  //     if (title === `You May Also Like`) {
  //       // setTimeout( () => {
  //       // }, 600)
  //       setMovies(state.moviesRowRecommended.data)
  //
  //       console.log(movies)
  //     }
  //   }
  //
  // }, [id])

  // useEffect(() => {
  //
  //
  //   if (title === `You May Also Like`) {
  //     setTimeout( () => {
  //       setMovies(state.moviesRowRecommended.data)
  //     }, 600)
  //     console.log(movies)
  //   } else {
  //     setMovies(state.moviesRow.data)
  //   }
  //
  //   console.log(title)
  // }, [id])


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



