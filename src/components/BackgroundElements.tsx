import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export function BackgroundElements() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -35, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/20 dark:bg-indigo-500/10 rounded-full blur-3xl"
      />

      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.01] transition-opacity duration-300 ${
          isDark ? 'dark-grid' : 'light-grid'
        }`} 
      />

      {/* Floating Shapes - Reduced count on mobile */}
      {Array.from({ length: window.innerWidth > 768 ? 20 : 10 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.3 + 0.2,
            opacity: Math.random() * 0.2 + 0.1,
          }}
          animate={{
            y: [null, Math.random() * -50],
            x: [null, Math.random() * 50 - 25],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute w-6 sm:w-8 h-6 sm:h-8 rounded-${Math.random() > 0.5 ? 'full' : 'lg'} 
            bg-gradient-to-br from-indigo-500/5 to-purple-500/5 
            dark:from-indigo-400/3 dark:to-purple-400/3 
            backdrop-blur-sm transition-colors duration-300`}
        />
      ))}
    </div>
  );
} 