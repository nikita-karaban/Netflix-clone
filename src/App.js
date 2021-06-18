import './App.css';
import * as ROUTES from './constants/routes';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Home, SignIn, Browse, SignUp, MovieDetails, SearchPage} from "./pages";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieNetflixOriginals} from "./redux/actions";

function App(props) {
  const dispatch = useDispatch();
  const movie = useSelector(store => store.movieNetflixOriginal.data);

  useEffect(async () => {
    dispatch(getMovieNetflixOriginals());
  }, [])


  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path={ROUTES.HOME}>
            <Home/>
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <SignIn/>
          </Route>
          <Route exact path={ROUTES.BROWSE} component={() => <Browse movie={movie}/>}/>
          <Route exact path={ROUTES.SIGN_UP}>
            <SignUp/>
          </Route>
          <Route path={ROUTES.MOVIE_ID} component={(props) => <MovieDetails {...props}/>}/>
          <Route exact path={ROUTES.SEARCH} component={() => <SearchPage/>}/>
        </Switch>
      </>
    </BrowserRouter>


  );
}

export default App;