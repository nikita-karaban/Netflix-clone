import React, {useEffect, useState} from 'react';
import axios from "../../api/api";
import {fetchMovieTrailer} from "../../Requests";
import ModalVideo from 'react-modal-video';
import {Button, Container, Contents, Description, ModalVideoWrapper, Title} from "./style";
import {useSelector} from "react-redux";
import MovieService from "../../model/services/moivieService";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  }
  const movie = useSelector(store => store.movies.movieNetflixOriginal.data);

  const [showText, setShowText] = useState(false);
  const [videoId, setVideoId] = useState('');
  const [isOpen, setOpen] = useState(false)

  const service = new MovieService().findId(movie)

  console.log(service)

  async function getMovieInfo(movieInfo) {
    let res = await axios.get(fetchMovieTrailer(movieInfo))
    if(res.data.results.length > 0) {
      setVideoId(res.data.results[0].key)
    } else {
      console.log('trailer not found')
    }
  }

  useEffect( () => {
    getMovieInfo(service?.id);
  }
)
  return (

    <Container style={{
      backgroundSize: "cover",
      backgroundImage: `url("https://image.tmdb.org/t/p/original/${service?.backdrop_path || service?.poster_path}")`,
      backgroundPosition: "center center"
    }}>
      <ModalVideoWrapper>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
      </ModalVideoWrapper>
      <Contents>
        <Title>{service?.name || service?.original_title}</Title>
        <div>
          <Button onClick={()=> setOpen(true)}>Play</Button>
          <Button>My List</Button>
        </div>
        <Description>
          { showText ? service.overview :
            truncate(service?.overview, 50)}
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

