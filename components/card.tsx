import React from "react";

interface CardProps {
  Logo: any;
  number: any;
  text: string;
  color: string;
  bg: string;
}
const Card: React.FC<CardProps> = ({ Logo, number, text, color, bg }) => {
  return (
    <div className="shadow-md flex flex-col justify-between items-center w-full bg-white rounded-md p-2 cursor-pointer hover:scale-105 duration-300">
      <Logo size={50} className={`bg-${bg} text-${color} p-1 rounded-full `} />
      <div className="flex flex-col items-center font-light">
        {/* bg-{color} */}
        <p className={`text-lg text-${color} font-medium`}>{number}</p>
        <p className="text-lg">{text}</p>
      </div>
    </div>
  );
};

export default Card;
