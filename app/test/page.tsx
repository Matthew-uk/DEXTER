"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  shop: {} | null;
  business: {} | null;
}

const DashboardPage: React.FC = () => {
  const [totalUsers, setTotalUsers] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);
  const [showUserTable, setShowUserTable] = useState<boolean>(false);
  const [incompleteUsersOnly, setIncompleteUsersOnly] =
    useState<boolean>(false);

  useEffect(() => {
    const fetchTotalUsers = async () => {
      try {
        const response = await axios.get(
          "https://beta.getdexterapp.com/api/test"
        );
        setTotalUsers(response.data.meta.total);
        console.log(response.data.meta.total);
      } catch (error) {
        console.error("Error fetching total users:", error);
      }
    };

    fetchTotalUsers();
  }, []);

  const toggleUserTable = () => {
    setShowUserTable(!showUserTable);
    if (showUserTable) {
      setIncompleteUsersOnly(false);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://beta.getdexterapp.com/api/test"
      );
      setUsers(response.data.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterIncompleteUsers = () => {
    setIncompleteUsersOnly(!incompleteUsersOnly);
  };

  const filteredUsers = incompleteUsersOnly
    ? users.filter((user) => !user.shop && !user.business)
    : users;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Dashboard</h1>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">User Section</h2>
          <button
            onClick={toggleUserTable}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
          >
            {showUserTable ? "Hide Table" : "Show Table"}
          </button>
        </div>
        <p>Total Users: {totalUsers}</p>
      </div>
      {showUserTable && (
        <div className="bg-white p-4 rounded-md mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">User Information</h3>
            <div>
              <label className="mr-2">Show Incomplete Users:</label>
              <input
                type="checkbox"
                checked={incompleteUsersOnly}
                onChange={filterIncompleteUsers}
              />
            </div>
          </div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td className="px-4 py-2">
                    {user.first_name} {user.last_name}
                  </td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">
                    <HiOutlineDotsVertical size={20} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
