import React from "react";
import { BsPlusLg } from "react-icons/bs";

export default function leftbar() {
  return (
    <div className="flex mt-6 ml-12 text-gray-200 gap-4 sm:m-3">
      <div className="flex flex-col font-thin">
        <span className="text-8xl">Stormy</span>
        <span className="text-6xl">with heavy Rain</span>
        <div className="flex flex-col my-14 font-sans">
          <span>Variable clouds with snow showers. High 11 F.</span>
          <span>Winds E at 10 to 20 mph.chance of snow</span>
          <span>50%. Snow accumulations less than one inch.</span>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-5xl font-sans">12°</span>
            <span>
              38.90° <span className="italic font-sans">N</span>
            </span>
            <span> Washington D.C</span>
            <hr className="backdrop-blur-xl font-bold bg-white/20" />
            <hr className="backdrop-blur-xl bg-white/20" />
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-sans">17°</span>
            <span>
              38.90° <span className="italic font-sans">N</span>
            </span>
            <span> Washington D.C</span>
            <span>
              <hr className="backdrop-blur-xl bg-white/20 font-bold" />
            </span>
            <span>
              {" "}
              <hr className="backdrop-blur-xl bg-white/20 font-bold" />
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-sans">14°</span>
            <span>
              38.90° <span className="italic font-sans">N</span>
            </span>
            <span> Washington D.C</span>
            <hr className="backdrop-blur-xl font-bold bg-white/20" />
            <hr className="backdrop-blur-xl font-bold bg-white/20" />
          </div>
        </div>
        <div className="flex gap-16 my-6 items-center">
          <div className="relative">
            <span className="rounded-full backdrop-blur-xl opacity-80 bg-white/20">
              <img
                src="mountain.jpg"
                alt=""
                className="rounded-full w-36 h-36"
              />
            </span>
            <span className="absolute inset-7 flex mt-24">
              <BsPlusLg className="text-gray-100 backdrop-blur-md bg-white/20 rounded-full text-3xl p-2" />
            </span>
          </div>
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col pl-6">
              <span className="text-xl font-sans">-3°</span>
              <div className=" flex gap-2">
                <span className="font-sans text-gray-100">Normal</span>
                <span className="font-sans text-sm p-1">38.90°</span>
              </div>
            </div>
            <span>
              {" "}
              <input
                type="range"
                className="range-slider bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-900 w-full"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
