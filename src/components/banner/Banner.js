import React, {useEffect, useState} from 'react';
import {instance} from "../../api/Axios"
import {fetchMovieTrailer} from "../../Requests";
import ModalVideo from 'react-modal-video';
import {Button, Container, Contents, Description, ModalVideoWrapper, Title} from "./style";
import {useSelector} from "react-redux";
import MovieDetails from "../../model/entites/movieDetails";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  const movie = useSelector(store => store.movies.movieNetflixOriginal.data);

  const [showText, setShowText] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [isOpen, setOpen] = useState(false)


  const movieDetailsDataStructure = new MovieDetails(movie?.id, movie?.poster_path, movie?.backdrop_path, movie?.name, movie?.original_title, movie?.overview)

  async function getMovieInfo(movieInfo) {
    let res = await instance.get(fetchMovieTrailer(movieInfo))
    if(res.data.results.length > 0) {
      setVideoId(res.data.results[0].key)
    } else {
      console.log('trailer not found')
    }
  }

  useEffect( () => {
    getMovieInfo(movieDetailsDataStructure?.id);
  }
)
  return (

    <Container style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${movieDetailsDataStructure?.backdrop_path || movieDetailsDataStructure?.poster_path}")`,
      backgroundPosition: "center center"
    }}>
      <ModalVideoWrapper>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
      </ModalVideoWrapper>
      <Contents>
        <Title>{movieDetailsDataStructure?.name || movieDetailsDataStructure?.original_title}</Title>
        <div>
          <Button onClick={()=> setOpen(true)}>Play</Button>
          <Button>My List</Button>
        </div>
        <Description>
          { showText ? movieDetailsDataStructure.overview :
            truncate(movieDetailsDataStructure.overview, 50)}
          <small  onClick={ (e) => {setShowText(!showText);
            e.preventDefault();
            e.target.style.display = 'none';
          } }>[more]</small>
        </Description>
      </Contents>

      <div className="fadeBottom" />
    </Container>
  );
}

export default Banner;

