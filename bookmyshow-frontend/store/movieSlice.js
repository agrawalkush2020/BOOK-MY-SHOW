// store/movieSlice.js
import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        locations: [{
            "service_provider": "INOX",
            "mall": "Huda city Center",
            "city": "Gurugram",
            "timings": [
                "10:00 AM",
                "09:30 PM"
            ]
        },
        {
            "service_provider": "INOX",
            "mall": "Huda city Center",
            "city": "Gurugram",
            "timings": [
                "10:00 AM",
                "09:30 PM"
            ]
        }],
    },
    reducers: {
        setLocations: (state, action) => {
            state.locations = action.payload;
        },
        clearLocations: (state) => {
            state.locations = [];
        },
    },
});

export const { setLocations, clearLocations } = movieSlice.actions;

export default movieSlice.reducer;
