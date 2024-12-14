"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Movie = ({
  photo = "movie_photo.jpeg", // Provide a default image path or URL
  name = "",
  id = -1,
  city = "",
  rating = 10,
}) => {
  const router = useRouter();

  const handleOnClick = async (movieName) => {
    try {
      const url = window.location.pathname;
      const newUrl = `${url}/${movieName}`;
      router.push(newUrl); // Navigate to the movie details page
    } catch (error) {
      console.error("Error during navigation:", error);
    }
  };

  return (
    <div
      onClick={() => handleOnClick(name)} // Trigger the click event to navigate
      className="w-[230px] cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
    >
      <div>
        {/* Movie Image */}
        <img
          src={`/assets/${photo}`} // Path to movie image
          alt={name}
          width="100%"
          height="auto"
          className="rounded-t-lg"
        />
        {/* Rating Section */}
        <div className="flex items-center mt-2">
          <img
            src="/assets/star.png" // Star image for rating
            alt="Rating Star"
            className="h-[20px] w-[20px] mr-1"
          />
          <span className="text-xl font-semibold">{rating}/10</span>
        </div>
      </div>
      <div className="mt-2 text-center font-medium">{name}</div>
    </div>
  );
};

export default Movie;
