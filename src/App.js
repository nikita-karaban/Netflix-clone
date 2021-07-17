import './App.css';
import * as ROUTES from './constants/routes';
import {Route, Switch} from "react-router-dom";
import {Home, SignIn, SignUp, MovieDetails, SearchPage, Browse} from "./views";
import {useHistory} from "react-router-dom";
// import {useSelector} from "react-redux";
import {setupInterceptors} from "./api/Axios";


function App(props) {

  const history = useHistory()
  // const store = useSelector((state) => state)
  setupInterceptors(history)


  return (
    <>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home/>
        </Route>
        <Route exact path={ROUTES.SIGN_IN}>
          <SignIn/>
        </Route>
        <Route exact path={ROUTES.BROWSE} >
          <Browse/>
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp/>
        </Route>
        <Route path={ROUTES.MOVIE_ID} component={(props) => <MovieDetails {...props}/>}/>
        <Route exact path={ROUTES.SEARCH} component={() => <SearchPage/>}/>
      </Switch>
    </>
  );
}

export default App;


