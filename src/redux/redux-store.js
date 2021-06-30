import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import movieNetflixOriginalReducer from "./reducers/movieNetflixOriginalReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import moviesRowReducer from "./reducers/moviesRowReducer";
import moviesRowRecommendedReducer from "./reducers/moviesRowRecommendedReducer";
import moviesRowTopRatedReducer from "./reducers/moviesRowTopRatedReducer"
import moviesRowComedyReducer from "./reducers/moviesRowComedyReducer"
import moviesRowDocumentariesReducer from "./reducers/moviesRowDocumentariesReducer"

let reducers = combineReducers({
  movies: combineReducers({
    movieNetflixOriginal: movieNetflixOriginalReducer,
    moviesRow: moviesRowReducer,
    moviesRowRecommended: moviesRowRecommendedReducer,
    moviesTopRated: moviesRowTopRatedReducer,
    moviesComedy: moviesRowComedyReducer,
    moviesDocumentaries: moviesRowDocumentariesReducer

  })
  // auth: combineReducers({})

})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;