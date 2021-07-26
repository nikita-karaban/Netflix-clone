import './App.css';
import * as ROUTES from './constants/routes';
import {Route, Switch} from "react-router-dom";
import {Home, SignIn, SignUp, MovieDetails, SearchPage, Browse} from "./views";
import {useHistory} from "react-router-dom";
import {setupInterceptors} from "./api/Axios";
import RequireAuth from "./HOC/RequireAuth";


function App(props) {

  const history = useHistory()
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
        <Route exact path={ROUTES.BROWSE}  component={RequireAuth(Browse)} />
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp/>
        </Route>
        <Route exact path={ROUTES.MOVIE_ID} component={RequireAuth(MovieDetails)} />
        <Route exact path={ROUTES.SEARCH} component={() => <SearchPage/>}/>
      </Switch>
    </>
  );
}

export default App;


