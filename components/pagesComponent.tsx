import React from "react";
import { CiSquareChevLeft } from "react-icons/ci";
import { CiSquareChevRight } from "react-icons/ci";

const PagesComponent = () => {
  // const numbers = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-row justify-between items-center font-extralight text-xs p-2 bg-white rounded-md mb-2 shadow">
      <div>1-11 of 875 items</div>
      <div className="flex flex-row justify-between gap-4">
        <CiSquareChevLeft
          size={22}
          className="font-extralight cursor-pointer"
        />
        <div className="flex flex-row gap-4 items-center">
          <span className="bg-dexter-green text-white w-4 text-center rounded-sm cursor-pointer hover:bg-white hover:text-black border border-transparent hover:border-dexter-green duration-200">
            1
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            2
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            3
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            4
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            5
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            6
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            ...
          </span>
          <span className="cursor-pointer rounded-sm ease-in-out border border-transparent hover:text-black px-1 hover:border-dexter-green duration-200">
            10
          </span>
        </div>
        <CiSquareChevRight
          size={22}
          className="font-extralight cursor-pointer"
        />
      </div>
    </div>
  );
};

export default PagesComponent;
