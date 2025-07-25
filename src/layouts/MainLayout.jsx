import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@components/Sidebar";
import Navbar from "@components/Navbar";
const MainLayout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Navbar />
        <main className="p-4 overflow-y-auto flex-1 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
