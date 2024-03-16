import React from "react";
import Card from "./card";
import { MdOutlineGroups } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
// import

const CardContainer = () => {
  return (
    <div className="flex flex-row gap-8 h-[200px]">
      {/* First */}
      <Card
        Logo={MdOutlineGroups}
        color="dexter-gray"
        number={350}
        text="Vendors"
        key={Math.random() * 1}
        bg="dexter-gray-bg"
      />
      {/* Second */}
      <Card
        Logo={CiSettings}
        color="dexter-orange"
        number={10}
        text="Active Services"
        key={Math.random() * 1}
        bg="dexter-orange-bg"
      />
      {/* Third */}
      <Card
        Logo={FaHandHoldingDollar}
        color="dexter-red"
        number={56}
        text="Active Service Request"
        key={Math.random() * 1}
        bg="dexter-red-bg"
      />
      {/* Last */}
      <Card
        Logo={LuUsers2}
        color="dexter-brown"
        number={"1110+"}
        text="Users"
        key={Math.random() * 1}
        bg="dexter-brown-bg"
      />
    </div>
  );
};

export default CardContainer;
