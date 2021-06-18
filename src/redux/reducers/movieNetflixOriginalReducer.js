import {FETCH_NETFLIX_ORIGINALS} from "../actions/actionsType";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_NETFLIX_ORIGINALS:
      // console.log(action.payload)
      const data = action.payload[
        Math.floor(Math.random() * action.payload.length - 1)
        ];
      return { ...state, data };
    default:
      return state;
  }
}

