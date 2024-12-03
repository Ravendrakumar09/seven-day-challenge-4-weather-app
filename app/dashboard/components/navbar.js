import React from "react";
import { FaCloudMoonRain } from "react-icons/fa";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { BsCloudSunFill } from "react-icons/bs";
import { TbWorldSearch } from "react-icons/tb";
import { LuListMinus } from "react-icons/lu";


export default function navbar() {
  return (
    <div className="flex justify-between border p-6 items-center text-white sm:flex-col sm:justify-between sm:pl-4">
      <div className="flex gap-6">
        <span className="flex font-bold gap-2 items-center">
          <span className="font-bold">
            <FaCloudMoonRain size={30} />
          </span>
          Weather forecast
        </span>
        <button className="hover:underline">Home</button>
        <button className="hover:underline">Application</button>
        <span className="font-thin text-2xl">09:46</span>
      </div>
      <div className="flex flex-row backdrop-blur-xl bg-white/20 gap-6 p-2 items-center rounded-3xl sm:m-2">
        <span className="bg-gray-300 border rounded-full text-gray-500 p-2">
          <GoSun size={18} />
        </span>
        <span className="border rounded-full p-2">
          <IoMoonOutline size={18} />
        </span>
      </div>
      <div className="flex gap-6 items-center">
        <span className="font-thin text-2xl">29 Dec</span>
        <span className="flex flex-col text-xs">
          Hey!👏<span> Cristina</span>
        </span>
        <div className="flex flex-row backdrop-blur-xl bg-white/20 gap-2 p-1 items-center rounded-3xl">
          <span className="bg-gray-300 border rounded-full text-gray-500 p-2">
            <BsPlus size={18} />
          </span>
          <span className="bg-gray-300 border rounded-full text-gray-500 p-2">
            <BsCloudSunFill size={18} />
          </span>
          <span className="rounded-full">
            <img src="./profile3.jpeg" alt=""  className="rounded-full w-10 h-10"/>
          </span>
        </div>
        <span  className="backdrop-blur-xl bg-white/20 rounded-full text-gray-200 p-2 text-2xl">
          <TbWorldSearch />
        </span>
        <span  className="bg-gray-600 rounded-full text-white p-2 text-2xl">
          <LuListMinus />
        </span>
      </div>
    </div>
  );
}
