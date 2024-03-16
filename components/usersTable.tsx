"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  shop?: {
    name: string;
    contact_email: string;
    contact_phone: string;
    contact_address: {
      street: string;
      city: string;
      state: string;
      country: string;
      full_address: string;
    };
    service: {
      name: string;
      description: string;
      cover_image: string;
    };
  };
}

const UsersTable: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [incompleteUsersOnly, setIncompleteUsersOnly] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<{ data: UserData[] }>(
          "https://beta.getdexterapp.com/api/test"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const filterIncompleteUsers = () => {
    setIncompleteUsersOnly(!incompleteUsersOnly);
  };

  const filteredUsers = incompleteUsersOnly
    ? data.filter((user) => !user.shop)
    : data;

  return (
    <div className="">
      <div>
        <label className="text-sm flex gap-2 items-center justify-center">
          Show Only Incomplete Users:
          <input
            type="checkbox"
            checked={incompleteUsersOnly}
            onChange={filterIncompleteUsers}
          />
        </label>
      </div>
      <table className="table-auto w-full bg-white p-4 rounded-md mt-4 shadow">
        <thead>
          <tr className="text-sm font-extralight border-b-2 border-dexter-green">
            <th className="px-4 py-2 font-extralight text-left">Name</th>
            <th className="px-4 py-2 font-extralight text-left">Email</th>
            <th className="px-4 py-2 font-extralight text-left">Service</th>
            <th className="px-4 py-2 font-extralight text-left">Shop</th>
            <th className="px-4 py-2 font-extralight text-left">Location</th>
            <th className="px-4 py-2 font-extralight text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100 border-y">
              <td className="border-y font-extralight text-sm px-4 py-2">
                {user.first_name} {user.last_name}
              </td>
              <td className="border-y font-extralight text-sm px-4 py-2">
                {user.email}
              </td>
              <td className="border-y font-extralight text-sm px-4 py-2">
                {user.shop?.service.name}
              </td>
              <td className="border-y font-extralight text-sm px-4 py-2">
                {user.shop?.name}
              </td>
              <td className="border-y font-extralight text-sm px-4 py-2">
                {user.shop?.contact_address.full_address}
              </td>
              <td className="text-center px-4">
                <HiOutlineDotsVertical
                  size={18}
                  className="text-center cursor-pointer"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
