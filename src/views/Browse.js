import React from "react";
import {Banner, Footer, Row} from "../components";
import requests from "../Requests";
import HeaderLayout from "../components/Layout/HeaderLayout";
import {Avatar} from "../components/Header/style";

export default function Browse({movie}) {
  // const dispatch = useDispatch();
  // const movie = useSelector(store => store.movieNetflixOriginal.data);
  //
  // useEffect(() => {
  //   dispatch(getMovieNetflixOriginals());
  // }, [])

  return (<>
      <HeaderLayout>
        <Avatar src={`https://yt3.ggpht.com/a/AATXAJzmsbkpHIglhRd-l90FxVLtOj2bjIlCNG6GWaVf=s900-c-k-c0xffffffff-no-rj-mo`} alt={'avatar'}/>
      </HeaderLayout>
      <main>
        <Banner movie={movie}/>
        <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
        <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
        <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
      </main>

      <Footer/>
    </>

  )
}