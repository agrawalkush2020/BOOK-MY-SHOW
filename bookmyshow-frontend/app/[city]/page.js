"use client";
import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import SearchableDropdown from "../../components/SearchableDropdown";
import makeTheCall from "../../utils/api";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { BE_URL } from "../../constants/routes";
import { cityOptions } from "../../constants/info";

const AllMovies = ({}) => {
  // debugger
  // const hardCode = [
  //     {'id': 1, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 2, 'name': 'Incedfdfd fddfghjhgfds fdfdfdfdfdfdption', 'rating': 8.8},
  //     {'id': 3, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 4, 'name': 'Incedfdfdfdfdfption', 'rating': 8.8},
  //     {'id': 5, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 6, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 7, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 8, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 9, 'name': 'Inception', 'rating': 8.8},
  //     {'id': 10, 'name': 'Inception', 'rating': 8.8}
  // ]

  const [city, setCity] = useState("New Delhi");
  const [movies, setMovies] = useState([]);

  const handleCityChange = async (newCity) => {
    setCity(newCity);
  };

  const fetchMovies = async () => {
    try {
        const response = await fetch(`${BE_URL}/movies/get_movies_in_city?city=${city}`);

    const data = await response.json();
      if(!response.ok) throw new Error("error");
      console.log("data", data);
      setMovies(data?.movies);
    } catch (error) {
      alert(`error:${error.message}`);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [city]);

  return (
    <div>
      <SearchableDropdown 
        options={cityOptions} 
        handleChange={handleCityChange} 
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
