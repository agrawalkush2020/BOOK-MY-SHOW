import { SET_MOVIES_LIST, RESET_MOVIES_LIST } from "./actionTypes";

export const setMoviesList = (movies) => ({ type: SET_MOVIES_LIST, payload: movies });
export const resetMoviesList = () => ({ type: RESET_MOVIES_LIST });
