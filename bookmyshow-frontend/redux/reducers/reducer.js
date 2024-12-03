// reducer.js
import { act } from "react";

import {
  RESET_BOOKED_SHOWS,
  RESET_MOVIES_LIST,
  RESET_SHOWS_LIST,
  SET_BOOKED_SHOWS,
  SET_MOVIES_LIST,
  SET_SHOWS_LIST,
} from "../actions/actionTypes";
import { setBookedShows } from "../actions/actions";

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
  bookedShows: [],
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



    // for the admin
    case SET_BOOKED_SHOWS:
      return { ...state, bookedShows: action.payload };
    case RESET_BOOKED_SHOWS:
      return { ...state, bookedShows: initialState.bookedShows };
    default:
      return state;
  }
};

export default Reducer;
