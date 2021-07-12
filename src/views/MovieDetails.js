import React, {useEffect} from 'react';
import {Banner, Row} from "../components";

import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DeleteData, fetchIsAuth, getMoviesRowRecommended, getMovieTarget} from "../redux/actions";
import BaseLayout from "../components/Layout/BaseLayout";
import {useHistory} from "react-router-dom";

function MovieDetails(props) {
  const {id} = useParams();
  const history = useHistory()

  const dispatch = useDispatch()


  useEffect( () => {
    async function fetchData() {
      await dispatch(fetchIsAuth(history))
      await dispatch(getMovieTarget(id))
      await dispatch(getMoviesRowRecommended(id))
    }
    fetchData();
    return () => {
      dispatch(DeleteData())
    }
  }, [id, dispatch, history]);


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