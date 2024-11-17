// reducer.js
import { act } from "react";
import { SET_MOVIES_LIST, RESET_MOVIES_LIST } from "./actionTypes";

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
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES_LIST:
      return { ...state, moviesList: action.payload };
    case RESET_MOVIES_LIST:
      return { ...state, moviesList: initialState.moviesList };
    default:
      return state;
  }
};

export default Reducer;
