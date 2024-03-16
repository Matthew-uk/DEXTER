"use client";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/dexter_logo.svg";
import { IoHomeOutline } from "react-icons/io5";
import { TbMessageCircleQuestion, TbTruckDelivery } from "react-icons/tb";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { LuUsers2 } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";
import useDexterState from "@/store/store";

const Sidebar = () => {
  const pathname = usePathname();
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  const activeStyle = "text-dexter-orange";
  const { isOpen, setIsOpen } = useDexterState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${
        isOpen ? "mt-0" : "-mt-[1500px]"
      } md:static fixed w-full bg-dexter-green h-[100vh] text-white md:w-[250px] flex flex-col md:items-start items-center md:mt-0 ease-in-out duration-300`}
    >
      <div className="absolute right-0 md:hidden">
        <IoClose
          size={30}
          className="cursor-pointer m-5"
          onClick={toggleMenu}
        />
      </div>
      <div className="flex items-center justify-center py-8 w-full">
        <Image src={Logo} alt="Dexter Logo" />
      </div>
      <ul className="font-extralight mt-8 flex flex-col gap-8">
        <Link
          href={"/"}
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out `}
        >
          <IoHomeOutline size={18} />
          Home
        </Link>
        <li
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out`}
        >
          <TbMessageCircleQuestion size={18} />
          Service Request
        </li>{" "}
        <li
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out`}
        >
          <HiOutlineUserGroup size={18} />
          Vendors
        </li>{" "}
        <li
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out`}
        >
          <TbTruckDelivery size={18} />
          Services
        </li>{" "}
        <Link
          href={"/users"}
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out ${
            pathname === "/users" && activeStyle
          }`}
        >
          <LuUsers2 size={18} />
          Users
        </Link>
        <li
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out`}
        >
          <HiOutlineShoppingCart size={18} />
          Payments
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
