import React, {useEffect} from "react";
import {Banner, Footer, Row} from "../components";
import HeaderLayout from "../components/Layout/HeaderLayout";
import {Avatar} from "../components/Header/style";
import {
  fetchComedy,
  fetchDocumentaries,
  fetchTopRated,
  getMovieRowNetflixOriginals
} from "../redux/actions";
import {useDispatch} from "react-redux";
import movieInfo from "../fixtures/movieInfo.json"


export default function Browse({movie}) {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getMovieRowNetflixOriginals())
    dispatch(fetchTopRated())
    dispatch(fetchComedy())
    dispatch(fetchDocumentaries())
  })

  return (<>
      <HeaderLayout>
        <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
      </HeaderLayout>
      <main>
        <Banner movie={movie}/>
        {movieInfo.map((item) => (
          <Row key={`${item.key}`} title={`${item.title}`}  keyRow={`${item.key}`} isLargeRow={`${item.isLargeRow}`}/>
          )
        )}
      </main>

      <Footer/>
    </>

  )
}