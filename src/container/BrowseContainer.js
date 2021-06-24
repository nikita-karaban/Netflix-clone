import React, {useEffect} from 'react';
import {Browse} from "../views";
import {useDispatch, useSelector} from "react-redux";
import {getMovieNetflixOriginals} from "../redux/actions";

function BrowseContainer(props) {
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movies.movieNetflixOriginal.data);


  useEffect( () => {
    async function fetchData() {
      await dispatch(getMovieNetflixOriginals());
      // console.log(movie)
    }
    fetchData();
  }, [dispatch])

  return (
    <Browse movie={movie}/>
  );
}

export default BrowseContainer;