import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={`
        fixed bottom-8 right-8 z-50
        flex items-center gap-2 px-4 py-2 rounded-full
        ${isDark 
          ? 'bg-gray-800 text-gray-200' 
          : 'bg-white text-gray-800'
        }
        shadow-lg hover:shadow-xl
        border border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out
        backdrop-blur-sm
        font-medium text-sm
      `}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 360 : 0,
          scale: isDark ? [1, 1.15, 1] : [1, 0.85, 1]
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="relative"
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-yellow-300" />
        ) : (
          <Moon className="w-4 h-4" />
        )}
      </motion.div>
      <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
    </motion.button>
  );
} 