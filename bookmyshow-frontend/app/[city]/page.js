"use client";
import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import { useRouter } from "next/navigation";
import SearchableDropdown from "../../components/SearchableDropdown";
import makeTheCall from "../../utils/api";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { BE_URL } from "../../constants/routes";

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
  const router = useRouter();
  const enterTheMovie = async (movieId, movieName) => {
    router.push(`/movies/${movieName}`);
  };

  const handleCityChange = async (newCity) => {
    debugger
    setCity(newCity);
  };

  const fetchMovies = async () => {
    try {
        const response = await fetch(`${BE_URL}/movies/get_movies_in_city?city=${city}`);
    //   const response = {
    //     sucess: true,
    //     movies: [
    //       {
    //         _id: "673ccd78ae979c346c67438b",
    //         name: "Inception",
    //         actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    //         director: "Christopher Nolan",
    //         producer: "Emma Thomas",
    //         duration: 148,
    //         trailer: "https://example.com/trailer/inception",
    //         rating: 8.8,
    //         __v: 0,
    //       },
    //       {
    //         _id: "673ccd78ae979c346c67438d",
    //         name: "The Dark Knight",
    //         actors: ["Christian Bale", "Heath Ledger"],
    //         director: "Christopher Nolan",
    //         producer: "Charles Roven",
    //         duration: 152,
    //         trailer: "https://example.com/trailer/dark-knight",
    //         rating: 9,
    //         __v: 0,
    //       },
    //     ],
    //   };

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

  const options = [
    "Mumbai",
    "Bangalore",
    "New Delhi",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahmedabad",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Visakhapatnam",
    "Bhopal",
    "Patna",
    "Vadodara",
    "Indore",
    "Coimbatore",
    "Agra",
    "Mysuru",
    "Nashik",
    "Faridabad",
    "Ghaziabad",
    "Rajkot",
    "Vijayawada",
    "Ludhiana",
    "Jodhpur",
    "Madurai",
    "Aurangabad",
    "Kochi",
    "Guwahati",
    "Chandigarh",
    "Noida",
    "Dehradun",
    "Ranchi",
    "Bhubaneswar",
    "Patiala",
    "Srinagar",
    "Mangalore",
    "Durgapur",
    "Bikaner",
    "Thane",
    "Kalyan-Dombivli",
    "Udaipur",
    "Bhilai",
    "Jamshedpur",
    "Warangal",
    "Navi Mumbai",
    "Ranchi",
    "Dhanbad",
    "Bareilly",
    "Gurgaon",
    "Coimbatore",
    "Raipur",
    "Jabalpur",
    "Ajmer",
    "Jammu",
    "Tirupati",
    "Aligarh",
    "Sagar",
    "Mysore",
    "Guwahati",
    "Bikaner",
  ];

  console.log(movies);

  //   if (movies.length==0) return "loading"

  return (
    <div>
      <SearchableDropdown 
        options={options} 
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
