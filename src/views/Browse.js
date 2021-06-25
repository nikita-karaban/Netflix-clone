import React, {useEffect} from "react";
import {Banner, Footer, Row} from "../components";
import requests from "../Requests";
import HeaderLayout from "../components/Layout/HeaderLayout";
import {Avatar} from "../components/Header/style";
import {fetchComedy, fetchDocumentaries, fetchTopRated, getMovieRowNetflixOriginals} from "../redux/actions";
import {useDispatch} from "react-redux";

export default function Browse({movie}) {
  const dispatch = useDispatch();
  // const movie = useSelector(store => store.movieNetflixOriginal.data);
  //
  // useEffect(() => {
  //   dispatch(getMovieNetflixOriginals());
  // }, [])
  const movieInfo = [
    {
      title: "Netflix Originals",
      fetchURL: requests.fetchNetflixOriginals,
      key: `Netflix`,
      isLargeRow: true
    },
    {
      title: "Top Rated",
      fetchURL: requests.fetchTopRated,
      key: `Top`,
      isLargeRow: false
    },
    {
      title: "Comedy Movies",
      fetchURL: requests.fetchComedyMovies,
      key: `Comedy`,
      isLargeRow: false
    },
    {
      title: "Documentaries",
      fetchURL: requests.fetchDocumentaries,
      key: `Documentaries`,
      isLargeRow: false
    }
  ]

  useEffect(() => {
    dispatch(getMovieRowNetflixOriginals())
    dispatch(fetchTopRated())
    dispatch(fetchComedy())
    dispatch(fetchDocumentaries())
  })

  console.log(movieInfo)


  return (<>
      <HeaderLayout>
        <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
      </HeaderLayout>
      <main>
        <Banner movie={movie}/>
        {movieInfo.map((item) => (
          <Row key={`${item.key}`} title={`${item.title}`} fetchURL={`${item.fetchURL}`} keyRow={`${item.key}`} isLargeRow={`${item.isLargeRow}`}/>
          )
        )}
      </main>

      <Footer/>
    </>

  )
}