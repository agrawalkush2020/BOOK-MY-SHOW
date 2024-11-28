"use client";
import react from "react";
import makeTheCall from "../utils/api";
import { useDispatch } from "react-redux"; // Import useDispatch
import { useRouter } from "next/navigation";
import { setShowsList } from "../redux/actions/actions";
// import { setLocations }

const Movie = ({
  photo = "movie_photo.jpeg", // Provide a default image path or URL
  name = "",
  id = -1,
  city = "",
  rating = 10,
  // handleOnClick = ()=>{}
}) => {
  console.log("id", id);
  const router = useRouter();
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function

  const handleOnClick = async (movieName) => {
    const response = await fetch(
      "http://127.0.0.1:3000/movies/get_all_shows/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify JSON data format
          "Authorization": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          movie: movieName,
          city: city,
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    dispatch(setShowsList(data?.allShows));
    const url = window.location.pathname; // Gets "/New Delhi"
    const param = decodeURIComponent(url.split("/")[1]); // Extracts "New Delhi"
    router.push(`/${param}/${movieName}`);
  };

  return (
    <div
      onClick={() => {
        handleOnClick(name);
      }}
      className="w-[230px] cursor-pointer "
    >
      <div>
        <img
          src={`/assets/${photo}`}
          alt="Group Icon"
          width="100%"
          height="auto"
        />
        <div className="flex">
          <img
            src={`/assets/star.png`}
            alt="Group Icon"
            className="h-[20px] w-[20px]"
          />
          <span>{rating}/10</span>
        </div>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Movie;
