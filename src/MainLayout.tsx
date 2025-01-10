import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-600 dark:text-gray-400">
        <p>© 2025 Social Media Analyzer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
