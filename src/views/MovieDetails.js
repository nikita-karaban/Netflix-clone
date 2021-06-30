import React, {useEffect} from 'react';
import {Banner, Footer, Row} from "../components";

import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DeleteData, getMoviesRowRecommended, getMovieTarget} from "../redux/actions";
import {Avatar} from "../components/Header/style";
import HeaderLayout from "../components/Layout/HeaderLayout";

function MovieDetails(props) {
  const {id} = useParams();

  const dispatch = useDispatch()


  useEffect( () => {
    async function fetchData() {
      await dispatch(getMovieTarget(id))
      await dispatch(getMoviesRowRecommended(id))
    }
    fetchData();
    return () => {
      dispatch(DeleteData())
    }
  }, [id, dispatch]);


  return (
    <>
      <HeaderLayout>
        <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
      </HeaderLayout>
      <main>
        <Banner />
        <Row title={`You May Also Like`} keyRow={`recommended`}  />
      </main>
      <Footer/>
    </>
  );
}

export default MovieDetails;