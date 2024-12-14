"use client";
import React, { useEffect, useState } from "react";
import Location from "../../../components/Location";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setShowsList } from "../../../redux/actions/actions";
import { useDispatch } from "react-redux"; // Correct import for useDispatch

const AllLocations = () => {
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(""); // To display error messages if any
  
  const showsList = useSelector((state) => state.showsList);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchTheShows = async () => {
    try {
      const url = window.location.pathname;
      const city = decodeURIComponent(url.split("/")[1]);
      const movie = decodeURIComponent(url.split("/")[2]);

      const response = await fetch(
        "http://127.0.0.1:3000/movies/get_all_shows/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("token"),
          },
          body: JSON.stringify({ movie, city }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to fetch shows.");
      dispatch(setShowsList(data?.allShows));
    } catch (error) {
      setError(error.message); // Capture and display the error
    } finally {
      setLoading(false); // Set loading to false after the fetch is complete
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Redirecting to login page.");
      router.push("/users/login");
      return;
    }

    fetchTheShows(); // Fetch shows when the component is mounted
  }, [dispatch, router]);

  if (loading) return <div>Loading...</div>; // Display loading state

  return (
    <div>
      <h1>Locations</h1>
      <div className="p-[50px]">
        <div className="text-[8px]">
          AVAILABLE FAST FILLING LAN SUBTITLES LANGUAGE
        </div>

        {error && <div className="text-red-500">{error}</div>} {/* Error display */}

        {showsList.length === 0 ? (
          <div>No shows Available</div>
        ) : (
          showsList.map((location) => (
            <Location
              id={location?.id} // Ensure location.id is available and unique
              serviceProvider={location?.serviceProvider}
              mall={location?.mall}
              timings={[location?.startTime]}
              key={location?.id} // Use id as the unique key for better performance
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AllLocations;
