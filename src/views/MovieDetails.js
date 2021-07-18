import React, {useEffect} from 'react';
import {Banner, Row} from "../components";

import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DeleteData, getMoviesRowRecommended, getMovieTarget} from "../redux/actions";
import BaseLayout from "../components/Layout/BaseLayout";

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
    <BaseLayout>
      <main>
        <Banner />
        <Row title={`You May Also Like`} keyRow={`recommended`}  />
      </main>
    </BaseLayout>
  );
}

export default MovieDetails;