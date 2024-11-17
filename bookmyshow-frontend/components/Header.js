'use client';
import React from "react"; 
const Header = ({

}) => {
    return (
        <div>
            <div className="flex justify-between w-[1307px] mx-auto h-[95px]" >
                <div>
                    <img src="/assets/splitwise_icon.png" alt="Logo" className="h-full object-contain"/>
                </div>
                <div className="flex items-center w-[140px] justify-between">
                    <button className="p-2 rounded-[10px] text-[17px] text-[#1bc29f]">Log in</button>
                    <button className="bg-[#1bc29f] p-2 rounded-[10px] text-white text-[17px]">sign up</button>
                </div>
            </div>

            <div className="flex justify-evenly py-10 bg-[#f3f3f3]">
                <div className="w-[400px] pt-[60px]">    {/* left div */}
                    <div className="text-[30px] font-bold"> 
                        Less stress when <br /> sharing expenses 
                        <div className="text-[#1bc29f]">
                            with housemates
                        </div>
                    </div>
                    <div className="flex pt-[10px]">
                        <img src="/icons/small_plane.png" className="h-[30px] pr-[5px]"/>
                        <img src="/icons/small_plane.png" className="h-[30px] pr-[5px]"/>
                        <img src="/icons/small_plane.png" className="h-[30px] pr-[5px]"/>
                        <img src="/icons/small_plane.png" className="h-[30px] pr-[5px]"/>
                    </div> {/* icons */}
                    <div className="text-[11px] py-[20px]">
                        Keep track of your shared expenses and <br /> balances with housemates, trips, groups,<br /> friends, and family.
                    </div>
                    <div>
                        <button className="bg-[#1bc29f] px-12 py-2.5 text-white rounded-lg text-[20px]">sign up</button>
                    </div>
                </div>
                <div>
                    <img src="/icons/small_plane.png" className="h-[500px]"/>
                
                </div>
            </div>
        </div>
    )
}

export default Header;