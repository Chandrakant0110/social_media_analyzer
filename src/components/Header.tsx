import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 z-50 w-full py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
        <motion.h1 
          className="text-lg font-bold sm:text-xl md:text-2xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className={`font-extrabold tracking-wider flex items-center gap-2 ${
              scrolled ? "text-gray-800 dark:text-white" : "text-white"
            }`}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
            >
              Social Media Analyzer
            </motion.span>
          </Link>
        </motion.h1>

        <nav className="flex space-x-6 md:space-x-8">
          {[
            { path: "/", label: "Home" },
            { path: "/members", label: "Team" }
          ].map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <Link
                to={link.path}
                className={`relative text-sm font-medium sm:text-base md:text-lg transition-all duration-300 
                  ${
                    isActiveRoute(link.path)
                      ? scrolled
                        ? "text-indigo-600 dark:text-indigo-400"
                        : "text-white"
                      : scrolled
                      ? "text-gray-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400"
                      : "text-gray-200 hover:text-white"
                  }
                  after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-0.5 
                  after:bg-current after:transition-all after:duration-300
                  ${isActiveRoute(link.path) ? "after:w-full" : "after:w-0 hover:after:w-full"}`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;