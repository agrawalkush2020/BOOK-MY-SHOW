// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'; // Create movieSlice as shown below

const store = configureStore({
    reducer: {
        movie: movieReducer,
    },
});

export default store;
