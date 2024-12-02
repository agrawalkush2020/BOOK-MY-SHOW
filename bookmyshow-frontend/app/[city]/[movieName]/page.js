"use client";
import React, { useEffect, useReducer } from "react";
import Location from "../../../components/Location";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { setShowsList } from "../../../redux/actions/actions";
import { useDispatch } from "../../../node_modules/react-redux/dist/react-redux";

const AllLocations = () => {
  // Access showsList from the Redux store
  const showsList = useSelector((state) => state.showsList);
  const router = useRouter();
  const dispatch = useDispatch();

  const fetchTheShows = async () => {
    const url = window.location.pathname;
    const city = decodeURIComponent(url.split("/")[1]);
    const movie = decodeURIComponent(url.split("/")[2]);

    const response = await fetch(
      "http://127.0.0.1:3000/movies/get_all_shows/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON data format
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({
          movie,
          city,
        }),
      }
    );

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    dispatch(setShowsList(data?.allShows));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Redirecting to login page.");
      router.push("/users/login");
      return;
    }

    // fetching all the shows according to the city and movie
    try {
      fetchTheShows();
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return (
    <div>
      Locations
      <div className="p-[50px]">
        <div className="text-[8px]">
          AVAILABLE FAST FILLING LAN SUBTITLES LANGUAGE
        </div>

        {showsList.length === 0
          ? "No shows Available"
          : showsList.map((location, index) => (
              <Location
                id={location.id}
                serviceProvider={location["serviceProvider"]}
                mall={location?.mall}
                timings={[location?.startTime]}
                key={location?.id}
              />
            ))}
      </div>
    </div>
  );
};

export default AllLocations;
