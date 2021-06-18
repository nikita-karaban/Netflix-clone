import {FETCH_ROW_MOVIES_RECOMMENDED} from "../actions/actionsType";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_ROW_MOVIES_RECOMMENDED:
      // console.log(action.payload)
      const data = action.payload
      return { ...state, data };
    default:
      return state;
  }
}