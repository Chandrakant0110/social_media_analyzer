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

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // Letter animation variants
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const title = "Social Media Analyzer";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 z-40 w-full py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-lg backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl px-6 mx-auto">
        <motion.h1 
          className="text-lg font-bold sm:text-xl md:text-2xl"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <Link
            to="/"
            className={`relative font-extrabold tracking-wider flex items-center gap-2 pointer-events-auto`}
          >
            <motion.div className="overflow-hidden py-2">
              <motion.div
                className="flex"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.03
                    }
                  }
                }}
                initial="hidden"
                animate="visible"
              >
                {title.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className={`inline-block ${
                      char === " " ? "w-2" : ""
                    } bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent hover:from-purple-500 hover:via-indigo-500 hover:to-purple-500 transition-all duration-500`}
                    whileHover={{
                      scale: 1.2,
                      rotate: Math.random() * 20 - 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </Link>
        </motion.h1>

        <nav className="flex space-x-6 md:space-x-8 pointer-events-auto">
          {[
            { path: "/", label: "Home" },
            { path: "/members", label: "Team" }
          ].map((link) => (
            <motion.div
              key={link.path}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ y: 0, scale: 0.95 }}
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
                  after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 
                  after:transition-all after:duration-300
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