
import { createStore } from "redux";
import Reducer from "../reducers/reducer"; // Import your reducer

// Create the store
const store = createStore(Reducer);

export default store;