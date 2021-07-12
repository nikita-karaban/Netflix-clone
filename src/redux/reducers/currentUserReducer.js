import {LOGIN_USER, LOGOUT_USER} from "../actions/actionsType";

const initialState = {
  currentUser: {},
  isAuth: false
}

export default function reducer(state = initialState , action) {
  switch (action.type) {
    case LOGIN_USER:
      return {...state, currentUser: action.payload, isAuth: true}
    case LOGOUT_USER:
      return {...state, currentUser: {}, isAuth: false}
    default:
      return state;
  }
}