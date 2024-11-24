"use client";
import react from "react";
import makeTheCall from "../utils/api";
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useRouter } from 'next/navigation';
// import { setLocations } 

const Movie = ({
    photo = "movie_photo.jpeg",  // Provide a default image path or URL
    name = "",
    id = -1,
    city = "",
    rating = 10
    // handleOnClick = ()=>{}
}) => {

    console.log("id", id);
    const router = useRouter();
    const dispatch = useDispatch(); // Use useDispatch to get the dispatch function
 

    const handleOnClick = async (movieName)=>{
        console.log("movie_id", movieName);
        // const response = await makeTheCall('http://127.0.0.1:8000/movies/get_all_shows/', 
        //                                     {'movie': movieName, 'city': city},
        //                                     'POST');

        const response = {
            "sucess": true,
            "allShows": [
                {
                    "id": "673ccd78ae979c346c674391",
                    "serviceProvider": "PVR Cinemas",
                    "mall": "Select Citywalk",
                    "startTime": "2024-11-19T09:30:00.000Z",
                    "endTime": "2024-11-19T11:58:00.000Z",
                    "intervalTime": "2024-11-19T10:30:00.000Z",
                    "interval": 15
                }
            ]
        }
        
        debugger
        const temp = 67;
        // Save data in Redux store
        // if (response && response['locations']) {
        //     dispatch(setLocations(response['locations']));
        // }
        router.push(`/movies/${name}`);
        // router.push({
        //     pathname: "/movies/${name}",
        //     query: { locations: response['locations'] }   
        // });

    }

    return (
        <div onClick={()=>{handleOnClick(name)}} className="w-[230px] cursor-pointer ">
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
            <div>
                {name}
            </div>
        </div>
    )
}

export default Movie;