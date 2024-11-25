"use client";
import React from "react";
import Location from "../../../components/Location";
import { useSelector } from "react-redux";

const AllLocations = () => {
  // Access showsList from the Redux store
  const showsList = useSelector((state) => state.showsList);
  console.log(showsList);
  // {
  //             "id": "673ccd78ae979c346c674391",
  //             "serviceProvider": "PVR Cinemas",
  //             "mall": "Select Citywalk",
  //             "startTime": "2024-11-19T09:30:00.000Z",
  //             "endTime": "2024-11-19T11:58:00.000Z",
  //             "intervalTime": "2024-11-19T10:30:00.000Z",
  //             "interval": 15
  //         }

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
