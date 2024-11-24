"use client";
import React, { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import { useRouter } from 'next/navigation';
import SearchableDropdown from "../../components/SearchableDropdown";
import makeTheCall from "../../utils/api";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { BE_URL } from "../../constants/routes";

const AllMovies = ({

}) => {

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


    const [city, setCity] = useState("");
    const [movies, setMovies] = useState([]);
    const router = useRouter(); 
    const enterTheMovie = async (movieId, movieName) => {
        router.push(`/movies/${movieName}`);
    }

    useEffect(()=>{
        const doIt = async()=>{
            try {
                const response = await makeTheCall(`${BE_URL}/movies/get_movies_in_city?city=${city}/`);
                console.log("response", response);
                setMovies([...response['movies']]);
                setMovies([...hardCode]);
            } catch (error) {
                alert(`error:${error.message}`);   
            }
        }
        doIt();
        
    },[city])

    const options = [
        'Mumbai',
        'Bangalore',
        'New Delhi',
        'Kolkata',
        'Chennai',
        'Hyderabad',
        'Ahmedabad',
        'Pune',
        'Jaipur',
        'Surat',
        'Lucknow',
        'Kanpur',
        'Nagpur',
        'Visakhapatnam',
        'Bhopal',
        'Patna',
        'Vadodara',
        'Indore',
        'Coimbatore',
        'Agra',
        'Mysuru',
        'Nashik',
        'Faridabad',
        'Ghaziabad',
        'Rajkot',
        'Vijayawada',
        'Ludhiana',
        'Jodhpur',
        'Madurai',
        'Aurangabad',
        'Kochi',
        'Guwahati',
        'Chandigarh',
        'Noida',
        'Dehradun',
        'Ranchi',
        'Bhubaneswar',
        'Patiala',
        'Srinagar',
        'Mangalore',
        'Durgapur',
        'Bikaner',
        'Thane',
        'Kalyan-Dombivli',
        'Udaipur',
        'Bhilai',
        'Jamshedpur',
        'Warangal',
        'Navi Mumbai',
        'Ranchi',
        'Dhanbad',
        'Bareilly',
        'Gurgaon',
        'Coimbatore',
        'Raipur',
        'Jabalpur',
        'Ajmer',
        'Jammu',
        'Tirupati',
        'Aligarh',
        'Sagar',
        'Mysore',
        'Guwahati',
        'Bikaner',
      ];

    if (!city) return null;

    return (
        <div>
            <SearchableDropdown options={options}/>
            Your Movies
            <div className="flex flex-wrap justify-start gap-[15px]">
                {movies.map((movie) => (
                    <Movie
                        photo="movie_photo.jpeg"   
                        name={movie.name}
                        id={movie.id}
                        key={movie.id}
                        city={city}
                        rating = {movie.rating}
                    />
                ))}
            </div>
        </div>
    )
}

export default AllMovies;