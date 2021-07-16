import './App.css';
import * as ROUTES from './constants/routes';
import {Route, Switch} from "react-router-dom";
import {Home, SignIn, SignUp, MovieDetails, SearchPage, Browse} from "./views";
import {InjectAxiosInterceptors} from "./components";


function App(props) {

  return (
    <>
      <InjectAxiosInterceptors />
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


