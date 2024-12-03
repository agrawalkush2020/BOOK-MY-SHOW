"use client";

import { BE_URL } from "../constants/routes";
import { setBookedShows } from "../redux/actions/actions";

export const allBookingsApiCall = async (dispatch)=>{
    const url = `${BE_URL}/admin/bookings`;
    console.log(url);
    // debugger

    try {
        const response = await fetch(url);
        const data = await response.json();
        if(!response.ok) throw new Error(response.message);
        dispatch(setBookedShows(data?.bookings));
        
    } catch (error) {
        alert(error.message);
    }
    
    return ;
}
