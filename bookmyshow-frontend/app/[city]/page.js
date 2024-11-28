"use client";
import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import SearchableDropdown from "../../components/SearchableDropdown";
import { BE_URL } from "../../constants/routes";
import { cityOptions } from "../../constants/info";

const AllMovies = ({}) => {
  const [city, setCity] = useState("");
  const [movies, setMovies] = useState([]);

  const handleCityChange = async (newCity) => {
    setCity(newCity);
    fetchMovies(newCity);
    const newUrl = `/${encodeURIComponent(newCity)}`;  
    window.history.pushState(null, "", newUrl);
  };

  const fetchMovies = async (cityName) => {
    try {
      const response = await fetch(
        `${BE_URL}/movies/get_movies_in_city?city=${cityName}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error("error");
      setMovies(data?.movies);
    } catch (error) {
      alert(`error:${error.message}`);
    }
  };

  useEffect(() => {

    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Redirecting to login page.");
      window.location.href = "/login"; // Redirect to login page
      return;
    }

    const url = window.location.pathname; // Gets "/New Delhi"
    const param = decodeURIComponent(url.split("/")[1]); // Extracts "New Delhi"
    console.log(param);
    handleCityChange(param);
  }, []);

  return (
    <div>
      <SearchableDropdown
        options={cityOptions}
        handleChange={handleCityChange}
        selectedValue={city}
      />
      {!movies || movies.length === 0 ? (
        <div>No movies found</div>
      ) : (
        <div>
          <h2>Your Movies</h2>
          <div className="flex flex-wrap justify-start gap-[15px]">
            {movies.map((movie) => (
              <Movie
                key={movie?._id}
                photo="movie_photo.jpeg"
                name={movie.name}
                id={movie._id}
                city={city}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMovies;
