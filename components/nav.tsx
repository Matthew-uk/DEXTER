import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="flex flex-row justify-between items-center w-full mt-4 bg-white p-2 rounded-md">
      <h2>{title}</h2>
      <div className="flex flex-row items-center justify-center gap-3">
        <IoIosNotificationsOutline size={25} className="cursor-pointer" />
        <CiUser
          size={25}
          className="bg-dexter-green rounded-full text-white p-1 cursor-pointer"
        />
        <h2 className="text-sm text-center">Admin</h2>
        <IoChevronDown className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
