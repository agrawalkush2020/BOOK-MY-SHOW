"use client";
import { useEffect, useState } from "react";
import { allBookingsApiCall } from "../../api/allBookingsApiCall";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/dist/react-redux";

const AdminPage = ({}) => {
  const dispatch = useDispatch();
  const [currentNav, setCurrentNav] = useState(null);
  const bookingsList = useSelector((state) => state.bookedShows);

  useEffect(() => {
    setCurrentNav("bookings");
    allBookingsApiCall(dispatch);
  }, []);

  return (
    <div>
      <nav className="flex">
        <div>bookings</div>
        <div>Create-Show</div>
        <div>upload-Movie</div>
        <div>Users</div>
      </nav>

      {currentNav == "bookings" && (
        <div className="flex flex-wrap">
          {bookingsList.map((show, index) => {
            return (
              <div key={show._id} className="flex flex-col m-2 bg-slate-400 px-2">
              <div>{show.show}</div>
              <div>{show.username}</div>
              <div>{show.seatNumber}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
