"use client";
import { BE_URL } from "../constants/routes";
import { setBookedShows } from "../redux/actions/actions";

export const allBookingsApiCall = async (dispatch,router) => {
  const url = `${BE_URL}/admin/bookings`;
  try {
    const response = await fetch(url,{
        headers:{
            Authorization:localStorage.getItem("token")
        }
    });
    const data = await response.json();
    if (data?.success == false) throw new Error(data.message);
    dispatch(setBookedShows(data?.bookings));
  } catch (error) {
    console.log(error.message);
    router.push("/admin/login");
  }
};
