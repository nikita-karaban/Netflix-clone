// import React, {useEffect, useState} from 'react';
// import {Header, SearchItems} from "../components";
// import styled from 'styled-components/macro'
//
// function SearchPage({history}) {
//   const [movies, setMovies] = useState([]);
//   // const { userInput } = history.location;
//
//   const API_KEY = 'ae1445d90303f322809a27f6606dd5e3';
//
//
//   const selectMovieHandler = (movie) => {
//     let url;
//     /** Make the appropriate API call to get the details for a single movie or tv show. */
//     if (movie.media_type === "movie") {
//       const movieId = movie.id;
//       url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
//
//     } else if (movie.media_type === "tv") {
//       const tvId = movie.id
//       url = `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}`;
//     }
//
//     // axios.get(url)
//     //   .then(res => {
//     //     const movieData = res.data;
//     //     // setState({ movieOverview: movieData });
//     //   }).catch(error => {
//     //   console.log(error);
//     // });
//   }
//
//   useEffect( () => {
//     async function  fetchData() {
//       console.log(history)
//       if (history?.location) {
//         console.log(history)
//         const {movieRows} = history.location;
//         if (movieRows)
//           await setMovies(movieRows);
//         console.log(movieRows)
//       }
//     }
//
//     // console.log(movies)
//   }, [])
//
//   return (
//     <>
//       <Header/>
//       <SearchItems movies={movies} />
//     </>
//   );
// }
//
// export default SearchPage;
//
// export const Container = styled.div``;
//
// // const MovieItems = (props) => (
// //   <div className="movie">
// //     <div onClick={props.movieDetails} className="movie__column-poster">
// //       <img src={props.movieImage} alt="" className="movie__poster"/>
// //     </div>
// //   </div>
// // );