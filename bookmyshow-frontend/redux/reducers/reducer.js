// reducer.js
import { act } from "react";

import {
  RESET_MOVIES_LIST,
  RESET_SHOWS_LIST,
  SET_MOVIES_LIST,
  SET_SHOWS_LIST,
} from "../actions/actionTypes";

const initialState = {
  moviesList: [
    {
      service_provider: "INOX",
      mall: "Huda city Center",
      city: "Gurugram",
      timings: ["10:00 AM", "09:30 PM"],
    },
    {
      service_provider: "INOX",
      mall: "Huda city Center",
      city: "Gurugram",
      timings: ["10:00 AM", "09:30 PM"],
    },
  ],
  showsList: [],
  
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_LIST:
      return { ...state, moviesList: action.payload };
    case RESET_MOVIES_LIST:
      return { ...state, moviesList: initialState.moviesList };
    case SET_SHOWS_LIST:
      return { ...state, showsList: action.payload };
    case RESET_SHOWS_LIST:
      return { ...state, showsList: initialState.showsList };
    default:
      return state;
  }
};

export default Reducer;
