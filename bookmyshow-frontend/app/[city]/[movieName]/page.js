"use client";
import React from "react";
import Location from "../../../components/Location";
import { useSelector } from "react-redux";

const AllLocations = () => {
  // Access showsList from the Redux store
  const showsList = useSelector((state) => state.showsList);

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
