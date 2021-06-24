import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import movieNetflixOriginalReducer from "./reducers/movieNetflixOriginalReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import moviesRowReducer from "./reducers/moviesRowReducer";
import moviesRowRecommendedReducer from "./reducers/moviesRowRecommendedReducer";
import movieTargetReducer from "./reducers/movieTargetReducer";

let reducers = combineReducers({
  movies: combineReducers({
    movieNetflixOriginal: movieNetflixOriginalReducer,
    moviesRow: moviesRowReducer,
    moviesRowRecommended: moviesRowRecommendedReducer,
    movieTarget: movieTargetReducer
  })
  // auth: combineReducers({})

})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;
export default store;