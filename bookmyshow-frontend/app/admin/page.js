"use client";
import { useEffect, useState } from "react";
import { allBookingsApiCall } from "../../api/allBookingsApiCall";
import {
  useDispatch,
  useSelector,
} from "../../node_modules/react-redux/dist/react-redux";
import { useRouter } from "next/navigation"; // Next.js routing

const AdminPage = ({}) => {
  const dispatch = useDispatch();
  const [currentNav, setCurrentNav] = useState("bookings");
  const bookingsList = useSelector((state) => state.bookedShows);
  const router = useRouter();

  useEffect(() => {
    allBookingsApiCall(dispatch, router);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="flex justify-center space-x-6 bg-blue-500 text-white py-4">
        <div
          className={`cursor-pointer ${
            currentNav === "bookings" ? "font-bold underline" : ""
          }`}
          onClick={() => setCurrentNav("bookings")}
        >
          Bookings
        </div>
        <div
          className={`cursor-pointer ${
            currentNav === "create-show" ? "font-bold underline" : ""
          }`}
          onClick={() => setCurrentNav("create-show")}
        >
          Create Show
        </div>
        <div
          className={`cursor-pointer ${
            currentNav === "upload-movie" ? "font-bold underline" : ""
          }`}
          onClick={() => setCurrentNav("upload-movie")}
        >
          Upload Movie
        </div>
        <div
          className={`cursor-pointer ${
            currentNav === "users" ? "font-bold underline" : ""
          }`}
          onClick={() => setCurrentNav("users")}
        >
          Users
        </div>
      </nav>

      {/* Bookings Section */}
      {currentNav === "bookings" && (
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookingsList.map((show) => (
            <div
              key={show._id}
              className="bg-white shadow-md rounded p-4 border border-gray-300"
            >
              <h2 className="text-lg font-semibold mb-2">{show.show}</h2>
              <p className="text-sm text-gray-600">User: {show.username}</p>
              <p className="text-sm text-gray-600">Seat: {show.seatNumber}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
