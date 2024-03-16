"use client";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";
import useDexterState from "@/store/store";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  const { isOpen, setIsOpen } = useDexterState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-row justify-between items-center w-full mt-4 bg-white p-2 rounded-md">
      <h2>{title}</h2>
      <div className="flex flex-row items-center justify-center gap-3">
        <IoIosNotificationsOutline size={25} className="cursor-pointer" />
        <CiUser
          size={25}
          className="bg-dexter-green rounded-full text-white p-1 cursor-pointer"
        />
        <h2 className="text-sm text-center font-extralight">Admin</h2>
        <IoChevronDown className="cursor-pointer" />
        <CgMenuRightAlt
          size={20}
          className="cursor-pointer md:hidden"
          onClick={toggleMenu}
        />
      </div>
    </div>
  );
};

export default Navbar;
