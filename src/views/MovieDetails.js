import React, {useEffect, useState} from 'react';
import {Banner, Footer, Row} from "../components";

import {useDispatch} from "react-redux";
import {getMovieTarget} from "../redux/actions";
import store from "../redux/redux-store";
import {Avatar} from "../components/Header/style";
import HeaderLayout from "../components/Layout/HeaderLayout";

function MovieDetails(props) {
  const [movieTarget, setMovieTarget] = useState([]);
  const { id } = props.match.params;
  const dispatch = useDispatch()
  const state = store.getState()


  useEffect( () => {
    // async function fetchMovieObj() {
    //   let res = await axios.get(fetchMovie(id))
    //   setMovieTarget(res.data)
    //   return res;
    // }
    // fetchMovieObj()
async function fetchData() {
  await dispatch(getMovieTarget(id))
  setMovieTarget(state.movies.movieTarget.data)
  // console.log(movieTarget)
}
fetchData();
  }, [id, dispatch, state.movies.movieTarget.data]);


  return (
    <>
      <HeaderLayout>
        <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
      </HeaderLayout>
      <main>
        <Banner movie={movieTarget}/>
        <Row title={`You May Also Like`}   />
      </main>
      <Footer/>
    </>
  );
}

export default MovieDetails;