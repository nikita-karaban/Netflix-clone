import React, {useEffect} from "react";
import {Banner, Row} from "../components";
import {
  fetchComedy,
  fetchDocumentaries,
  fetchTopRated, getMovieNetflixOriginals,
  getMovieRowNetflixOriginals
} from "../redux/actions";
import {useDispatch} from "react-redux";
import movieInfo from "../fixtures/movieInfo.json"
import BaseLayout from "../components/Layout/BaseLayout";


export default function Browse({movie}) {
  const dispatch = useDispatch();




  useEffect( () => {

    dispatch(getMovieNetflixOriginals())
    dispatch(getMovieRowNetflixOriginals())
    dispatch(fetchTopRated())
    dispatch(fetchComedy())
    dispatch(fetchDocumentaries())
  }, [dispatch])

  return (<BaseLayout>
      <main>
        <Banner />
        {movieInfo.map((item) => (
          <Row key={`${item.key}`} title={`${item.title}`}  keyRow={`${item.key}`} isLargeRow={`${item.isLargeRow}`}/>
          )
        )}
      </main>
    </BaseLayout>

  )
}