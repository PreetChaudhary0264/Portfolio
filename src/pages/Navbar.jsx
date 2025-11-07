import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "About" },
    { path: "/achievements", label: "Skills" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-neutral-800 shadow-md w-full text-white rounded-bl-xl">
      <div
        className="
          max-w-6xl mx-auto px-4 sm:px-6 py-3
          flex flex-wrap justify-center items-center gap-6 sm:gap-10
          text-base sm:text-lg font-medium
        "
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`transition-colors ${
              location.pathname === item.path
                ? "text-blue-400 font-semibold"
                : "text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;


