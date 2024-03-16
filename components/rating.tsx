import React from "react";
import Stars from "@/assets/stars.svg";
import Image from "next/image";

interface RatingProps {
  img: any;
  name: string;
  job: string;
}

const Rating: React.FC<RatingProps> = ({ img, name, job }) => {
  return (
    <div className="flex flex-row justify-between items-center text-dexter-gray gap-2">
      {/* <div className="w-4 h-6 rounded-full shadow-md"> */}
      <Image src={img} alt="Profile Pic" className="w-6 h-6 rounded-full" />
      {/* </div> */}
      <p className="font-light text-xs w-4/12 text-center">{name}</p>
      <p className="font-light text-xs text-center">{job}</p>
      <Image src={Stars} alt="Stars" />
      <p className="text-dexter-green text-xs">4/5</p>
    </div>
  );
};

export default Rating;
