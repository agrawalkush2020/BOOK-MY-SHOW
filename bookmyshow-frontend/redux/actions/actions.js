import {
  SET_MOVIES_LIST,
  RESET_MOVIES_LIST,
  SET_SHOWS_LIST,
  RESET_SHOWS_LIST,
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
