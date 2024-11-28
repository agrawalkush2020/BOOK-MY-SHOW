"use client";
import React, { useEffect, useReducer } from "react";
import Location from "../../../components/Location";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const AllLocations = () => {
  // Access showsList from the Redux store
  const showsList = useSelector((state) => state.showsList);
  const router = useRouter();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You are not logged in. Redirecting to login page.");
      router.push("/users/login"); 
      return;
    }
  },[]);

  return (
    <div>
      Locations
      <div className="p-[50px]">
        <div className="text-[8px]">
          AVAILABLE FAST FILLING LAN SUBTITLES LANGUAGE
        </div>

        {showsList.length === 0
          ? "No shows Available"
          : showsList.map((location, index) => (
              <Location
                id={location.id}
                serviceProvider={location["serviceProvider"]}
                mall={location?.mall}
                timings={[location?.startTime]}
                key={location?.id}
              />
            ))}
      </div>
    </div>
  );
};

export default AllLocations;
