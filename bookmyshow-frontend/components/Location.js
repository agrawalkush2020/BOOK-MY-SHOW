"use client";
import React, { useState } from "react";

const Location = ({
    service_provider="",
    mall="",
    city="",
    timings=[]
})=>{

    return (
        <div>
            <div className="h-px bg-gray-500 border-0"></div>
            <div className="flex h-[70px] my-[20px]">
                <div className="w-[350px]">
                    <div className="flex justify-between">
                        <div><img src={"/assets/colorHeartIcon.png"} alt="Group Icon" className="w-[20px] inline"
                            />{service_provider}, {mall}, {city}</div>
                        <div className="flex">
                            <img 
                                src={"/assets/infoIcon.png"}
                                alt="Group Icon" 
                                className="w-[20px]"
                            
                            /> info
                        </div>
                    </div>
                    <div className="flex justify-center mt-[10px] text-xs">
                        <div className="ml-[-30px]"><img src={"/assets/mTicketIcon.png"} alt="Group Icon" className="w-[20px] inline" /> M-Ticket</div>
                        <div className="ml-[20px]"> <img src={"/assets/beveragesIcon.png"} alt="Group Icon" className="w-[20px] inline" />Food & Beverage</div>
                    </div>
                </div>
                <div className="ml-[10px]">
                    {timings.map((time)=>{
                        return (
                            <button
                            className="border border-gray-600 px-7 py-3 text-green-400 rounded-md text-xs mr-[10px]"
                                key={time}
                            >
                                {time}
                            </button>
                        )
                    })}
                    <div className="text-[10px] mt-[10px]">Cancellation Available</div>
                </div>
            </div>
        </div>

    )
}

export default Location;