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
  showsList: [
    {
      id: "673ccd78ae979c346c674391",
      serviceProvider: "PVR Cinemas",
      mall: "Select Citywalk",
      startTime: "2024-11-19T09:30:00.000Z",
      endTime: "2024-11-19T11:58:00.000Z",
      intervalTime: "2024-11-19T10:30:00.000Z",
      interval: 15,
    },
  ],
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
