import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg backdrop-blur-sm bg-opacity-90">
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
        {/* Logo */}
        <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
          <Link
            to="/"
            className="text-white font-extrabold tracking-wider hover:scale-105 transition-transform duration-300 flex items-center gap-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              Social Media Analyzer
            </span>
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-6 md:space-x-8">
          <Link
            to="/"
            className={`relative text-sm font-medium sm:text-base md:text-lg transition-all duration-300 
              ${
                isActiveRoute("/")
                  ? "text-white"
                  : "text-purple-100 hover:text-white"
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 
              after:bg-white after:transition-all after:duration-300
              ${
                isActiveRoute("/")
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
          >
            Home
          </Link>
          <Link
            to="/members"
            className={`relative text-sm font-medium sm:text-base md:text-lg transition-all duration-300 
              ${
                isActiveRoute("/members")
                  ? "text-white"
                  : "text-purple-100 hover:text-white"
              }
              after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 
              after:bg-white after:transition-all after:duration-300
              ${
                isActiveRoute("/members")
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
          >
            Team
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;