import React from "react";
import {Banner, Footer, Header, Row} from "../components";
import requests from "../Requests";
// import rowData from './../fixtures/rowGenre.json'

export default function Browse({movie, ...restProps}) {
  return (<>
      <Header/>
      <Banner movie={movie}/>
      <Row title='Netflix Originals' fetchURL={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title='Top Rated' fetchURL={requests.fetchTopRated}/>
      <Row title='Comedy Movies' fetchURL={requests.fetchComedyMovies}/>
      <Row title='Documentaries' fetchURL={requests.fetchDocumentaries}/>
      <Footer/>
    </>

  )
}