import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaTemperatureHalf } from "react-icons/fa6";
import { IoIosAdd } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import { WiDayRainMix } from "react-icons/wi";
import { WiCloudyWindy } from "react-icons/wi";
import { TbSunWind } from "react-icons/tb";
import { TbCloudCog } from "react-icons/tb";


export default function rightbar() {
  return (
    <div className="flex flex-col  mr-10 text-gray-50 mt-10">
      <div className="flex bg-white w-10 h-6 justify-center items-baseline text-gray-600 rounded-full sm:ml-3">
        <span className="flex text-xl">
          <HiOutlineDotsHorizontal />
        </span>
      </div>
      <div className="flex mt-10 sm:ml-3">
        <div className="flex flex-col gap-2 justify-end">
          <span className="backdrop-blur-lg bg-white/20 rounded-3xl text-sm justify-center items-center p-1">
            38.90° <span className="font-sans">N</span>
          </span>
          <span className="backdrop-blur-lg bg-black/20 rounded-3xl text-sm text-white justify-center p-1 w-20">
            Excellent
          </span>
        </div>
        <div className="flex text-8xl pl-10 font-thin items-baseline">
          <span>27° </span>
        </div>
      </div>
        <div className="flex justify-between mt-4 sm:ml-3 ">
          <div className="flex flex-col font-thin text-3xl">
          <span className="font-sans text-xs">Intensity</span>
          <span className="font-sans text-xs">Zones</span>
          </div>
          <div className="flex flex-col ">
            <span>WIND: WSW 6 MPH</span>
            <span>UV INDEX: 0 OF 10</span>
            <span className="font-sans text-xs font-thin">-NEW YORK CITY</span>
          </div>
        </div>
        <div>
          <div className="flex text-3xl font-thin font-sans gap-3">
          <span><FaTemperatureHalf/></span>
          <span>9.8%</span>
          <span className="pt-5 text-sm"><IoIosAdd/></span>
          </div>
        </div>
        <div className="flex justify-between mt-8">
          <div className="flex flex-col gap-8 justify-center py-1">
            <span className="flex"><span className="text-gray-600"><LuDot/></span> Pennsylania[PB]</span>
            <span className="flex"><span className="text-gray-600"><LuDot/></span> Massachusets[MA]</span>
            <span className="flex"><span><LuDot/></span> New York[NY]</span>
            <span className="flex"><span><LuDot/></span> North Carolina[Nc]</span>
          </div>
          <div className="flex flex-col gap-8 p-1">
            <span>18°</span>
            <span>24°</span>
            <span>27°</span>
            <span>-2°</span>
          </div>
          <div className="flex flex-col backdrop-blur-xl bg-white/15 gap-5 p-1 justify-between items-center rounded-3xl">
            <span className="backdrop-blur-xl bg-white/15  rounded-full text-gray-500 p-2"><WiDayRainMix size={18}/></span>
            <span className="bg-gray-300 border rounded-full text-gray-500 p-2"><WiCloudyWindy size={18}/></span>
            <span className="backdrop-blur-xl bg-white/15  rounded-full text-gray-500 p-2"><TbSunWind size={18}/></span>
            <span className="backdrop-blur-xl bg-white/15  rounded-full text-gray-500 p-2"n><TbCloudCog size={18}/></span>
          </div>
        </div>
    </div>
  );
}
