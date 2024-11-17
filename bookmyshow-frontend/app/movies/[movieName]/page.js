"use client";
import React from "react";
import Location from "../../../components/Location";
import { useSelector } from 'react-redux';

const AllLocations = () => {
    const locations = useSelector((state) => state.movie.locations);
    console.log(locations);

    return (
        <div>
            Locations
            <div className="p-[50px]">
                <div className="text-[8px]">
                    AVAILABLE FAST FILLING LAN SUBTITLES LANGUAGE
                </div>
                {locations.map((location, index) => {
                    return ( // Explicitly returning JSX
                        <Location 
                            service_provider={location['service_provider']}
                            mall={location['mall']}
                            city={location.city}
                            timings={location.timings}
                            key={index}
                        />  
                    );
                })}
            </div>
        </div>
    );
}

export default AllLocations;
