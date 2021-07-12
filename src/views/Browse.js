import React, {useEffect} from "react";
import {Banner, Row} from "../components";
import {
  fetchComedy,
  fetchDocumentaries, fetchIsAuth,
  fetchTopRated,
  getMovieRowNetflixOriginals
} from "../redux/actions";
import {useDispatch} from "react-redux";
import movieInfo from "../fixtures/movieInfo.json"
import BaseLayout from "../components/Layout/BaseLayout";
import {useHistory} from "react-router-dom";


export default function Browse({movie}) {
  const dispatch = useDispatch();
  // const isLogged = useSelector()
  const history = useHistory()




  useEffect( () => {
    // dispatch(fetchIsAuth())
    dispatch(fetchIsAuth(history))
    dispatch(getMovieRowNetflixOriginals())
    dispatch(fetchTopRated())
    dispatch(fetchComedy())
    dispatch(fetchDocumentaries())
  })

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