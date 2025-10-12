import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Navbar from "./Navbar";
import ProfileCard from "./ProfileCard";
import { Outlet } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Dash = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1000);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="m-4 sm:m-10 lg:m-20 flex flex-col lg:flex-row min-h-[calc(100vh-40px)] rounded-xl overflow-hidden shadow-lg">
      {/* Sidebar (only for width ≥ 1000px) */}
      {!isMobile && (
        <div className="self-start">
          <Sidebar />
        </div>
      )}

      {/* Main content area */}
      <div className={`flex-1 flex flex-col ${!isMobile ? "ml-10" : ""}`}>

        {/* Arrow button to toggle profile card (mobile only) */}
        {isMobile && (
          <div className="flex justify-center my-3">
            <button
              onClick={() => setShowCard(!showCard)}
              className="text-blue-400 hover:text-blue-500 transition"
            >
              <ChevronDown size={28} />
            </button>
          </div>
        )}

        {/* ProfileCard appears when arrow clicked */}
        {isMobile && (
          <div className="p-4">
            <ProfileCard isOpen={showCard} setIsOpen={setShowCard} />
          </div>
        )}

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













