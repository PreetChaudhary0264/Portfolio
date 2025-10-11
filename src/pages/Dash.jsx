import React from "react";
import Sidebar from "../Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Dash = () => {
  return (
  
    <div className="m-20 flex min-h-[calc(100vh-40px)] rounded-xl overflow-hidden shadow-lg ">
      {/* Sidebar */}
      <div>
          <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col ml-10">
        {/* Navbar aligned with outlet */}
        <Navbar />

        {/* Outlet (scrollable only) */}
        <main className="flex-1 overflow-auto p-6 bg-neutral-900">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dash;







