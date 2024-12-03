import {
  SET_MOVIES_LIST,
  RESET_MOVIES_LIST,
  SET_SHOWS_LIST,
  RESET_SHOWS_LIST,
  SET_BOOKED_SHOWS,
  RESET_BOOKED_SHOWS,
} from "./actionTypes";

// movies actions
export const setMoviesList = (movies) => ({
  type: SET_MOVIES_LIST,
  payload: movies,
});
export const resetMoviesList = () => ({ type: RESET_MOVIES_LIST });

// shows actions
export const setShowsList = (shows) => ({
  type: SET_SHOWS_LIST,
  payload: shows,
});
export const resetShowsList = () => ({ type: RESET_SHOWS_LIST });




// for the admin
export const setBookedShows = (shows) => ({
  type: SET_BOOKED_SHOWS,
  payload: shows,
});

export const resetBookedShows = () => ({
  type: RESET_BOOKED_SHOWS,
});
