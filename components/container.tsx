import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

const Container = ({ children }: any) => {
  return (
    <div className="flex flex-row h-[100vh] w-full">
      <Sidebar />
      <main className="bg-dexter-white flex flex-col gap-3 px-4 w-full">
        {children}
      </main>
    </div>
  );
};

export default Container;
