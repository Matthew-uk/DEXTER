import Container from "@/components/container";
import Navbar from "@/components/nav";
import PagesComponent from "@/components/pagesComponent";
import UsersTable from "@/components/usersTable";
import React from "react";

const Users = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col justify-start">
            <Navbar title="Users" />
            <UsersTable />
          </div>
          <PagesComponent />
        </div>
      </Container>
    </div>
  );
};

export default Users;
