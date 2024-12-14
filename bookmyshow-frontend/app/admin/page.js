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

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem("token");
    alert("You have been logged out.");
    router.push("/admin/login");
  };

  useEffect(() => {
    allBookingsApiCall(dispatch, router);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="relative flex items-center bg-blue-500 text-white py-4 px-6">
        {/* Centered Navigation Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
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
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="ml-auto bg-yellow-500 hover:bg-yellow-400 text-white font-medium px-6 py-2 rounded-lg shadow-lg transition-transform duration-200 transform hover:scale-105"
        >
          Logout
        </button>
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
