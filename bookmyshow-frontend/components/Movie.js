"use client";
import react from "react";
import makeTheCall from "../utils/api";
import { useDispatch } from "react-redux"; // Import useDispatch
import { useRouter } from "next/navigation";

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
  const dispatch = useDispatch();

  const handleOnClick = async (movieName) => {
    const url = window.location.pathname;
    const newUrl = `${url}/${movieName}`;
    router.push(newUrl);
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
          <span className="bg-[#98788]">{rating}/10</span>
        </div>
      </div>
      <div>{name}</div>
    </div>
  );
};

export default Movie;
