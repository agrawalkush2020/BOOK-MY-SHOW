"use client";
import React, { useState } from "react";

const Location = ({
  id = -1,
  serviceProvider = "",
  mall = "",
  timings = [],
}) => {
  const [seatBooked, setSeatBooked] = useState(false);
  async function selectTheTiming(time, showId) {
    try {
      const response = await fetch(
        "http://127.0.0.1:3000/movies/confirm_the_ticket/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify JSON data format
          },
          body: JSON.stringify({
            time,
            showId,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      setSeatBooked(true);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  }

  if (seatBooked) {
    return "Congratulation your seat is Booked";
  }

  return (
    <div>
      <div className="h-px bg-gray-500 border-0"></div>
      <div className="flex h-[70px] my-[20px]">
        <div className="w-[350px]">
          <div className="flex justify-between">
            <div>
              <img
                src={"/assets/colorHeartIcon.png"}
                alt="Group Icon"
                className="w-[20px] inline"
              />
              {serviceProvider}, {mall}
            </div>
            <div className="flex">
              <img
                src={"/assets/infoIcon.png"}
                alt="Group Icon"
                className="w-[20px]"
              />{" "}
              info
            </div>
          </div>
          <div className="flex justify-center mt-[10px] text-xs">
            <div className="ml-[-30px]">
              <img
                src={"/assets/mTicketIcon.png"}
                alt="Group Icon"
                className="w-[20px] inline"
              />{" "}
              M-Ticket
            </div>
            <div className="ml-[20px]">
              {" "}
              <img
                src={"/assets/beveragesIcon.png"}
                alt="Group Icon"
                className="w-[20px] inline"
              />
              Food & Beverage
            </div>
          </div>
        </div>
        <div className="ml-[10px]">
          {Array.isArray(timings) &&
            timings.map((time) => {
              return (
                <button
                  className="border border-gray-600 px-7 py-3 text-green-400 rounded-md text-xs mr-[10px]"
                  key={time}
                  onClick={() => {
                    selectTheTiming(time, id);
                  }}
                >
                  {time}
                </button>
              );
            })}
          <div className="text-[10px] mt-[10px]">Cancellation Available</div>
        </div>
      </div>
    </div>
  );
};

export default Location;
