import React, {useEffect, useRef, useState} from 'react';
import {Banner, Footer, Header, Row} from "../components";

import {useDispatch} from "react-redux";
import {getMovieTarget} from "../redux/actions";
import store from "../redux/redux-store";

function MovieDetails(props) {
  const [movieTarget, setMovieTarget] = useState([]);
  const { id } = props.match.params;
  const dispatch = useDispatch()
  const state = store.getState()


  useEffect(() => {
    // async function fetchMovieObj() {
    //   let res = await axios.get(fetchMovie(id))
    //   setMovieTarget(res.data)
    //   return res;
    // }
    // fetchMovieObj()
    dispatch(getMovieTarget(id))
    setMovieTarget(state.movieTarget.data)
    console.log(movieTarget)
  }, [id]);


  return (
    <>
      <Header/>
      <Banner movie={movieTarget}/>
      <Row title={`You May Also Like`} id={movieTarget.id}  />
      <Footer/>
    </>
  );
}

export default MovieDetails;