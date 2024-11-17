"use client";
import react from "react";
import makeTheCall from "../utils/api";
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useRouter } from 'next/navigation';
import { setLocations } from "../store/movieSlice";

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
 

    const handleOnClick = async (movie_id)=>{
        console.log("movie_id", movie_id);
        const response = await makeTheCall('http://127.0.0.1:8000/movies/get_all_locations_and_timings/', 
                                            {'movie_id': movie_id, 'city': city},
                                            'POST');
        
        debugger
        const temp = 67;
        // Save data in Redux store
        if (response && response['locations']) {
            dispatch(setLocations(response['locations']));
        }
        router.push(`/movies/${name}`);
        // router.push({
        //     pathname: "/movies/${name}",
        //     query: { locations: response['locations'] }   
        // });

    }

    return (
        <div onClick={()=>{handleOnClick(id)}} className="w-[230px] cursor-pointer ">
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