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

const Sidebar = () => {
  const pathname = usePathname();
  const activeLink = useState("");
  const activeStyle = "text-dexter-orange";

  return (
    <div className="bg-dexter-green h-[100vh] text-white md:w-[250px] flex flex-col">
      <div className="flex items-center justify-center py-8">
        <Image src={Logo} alt="Dexter Logo" />
      </div>
      <ul className="font-extralight mt-8 flex flex-col gap-8">
        <li
          className={`flex flex-row items-center pl-6 gap-2 cursor-pointer text-sm hover:text-gray-500 duration-300 ease-in-out`}
        >
          <IoHomeOutline size={18} />
          Home
        </li>
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
