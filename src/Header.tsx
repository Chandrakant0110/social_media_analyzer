import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-4 text-white bg-gray-800 shadow-md">
      <div className="flex items-center justify-between max-w-6xl px-4 mx-auto">
        {/* Logo */}
        <h1 className="text-lg font-bold sm:text-xl md:text-2xl">
          <Link
            to="/"
            className="transition-colors duration-300 hover:text-gray-300"
          >
            Social Media Analyzer
          </Link>
        </h1>

        {/* Navigation Links */}
        <nav className="flex space-x-4 text-red-400 md:space-x-6">
          <Link
            to="/"
            className="text-sm font-medium transition-colors duration-300 hover:text-gray-300 sm:text-base md:text-lg"
          >
            Home
          </Link>
          <Link
            to="/members"
            className="text-sm font-medium transition-colors duration-300 hover:text-gray-300 sm:text-base md:text-lg"
          >
            Team
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
