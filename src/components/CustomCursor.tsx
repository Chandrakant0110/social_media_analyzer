import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

export function CustomCursor() {
  // Check for touch device and small screen
  const isTouchDevice = () => {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0));
  };

  const isMobileScreen = () => {
    return window.innerWidth <= 768;
  };

  // If it's a touch device or mobile screen, don't render the cursor
  if (typeof window !== 'undefined' && (isTouchDevice() || isMobileScreen())) {
    return null;
  }

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setIsVisible(true);

    const updateCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
        setTrail(prev => [...prev, { x: e.clientX, y: e.clientY }].slice(-12));
      });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      setIsPointer(
        window.getComputedStyle(hoveredElement || document.body).cursor === 'pointer'
      );
    };

    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    const handleMouseLeave = () => {
      if (!document.hidden) {
        setIsVisible(false);
      }
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseover', updateCursorType);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseover', updateCursorType);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [position.x, position.y]);

  if (position.x === 0 && position.y === 0) {
    return null;
  }

  return (
    <>
      <style>
        {`
          body * {
            cursor: none !important;
          }
          .pointer-events-auto {
            pointer-events: auto !important;
          }
        `}
      </style>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-[60]"
          initial={{ opacity: 0.5, scale: 1 }}
          animate={{
            opacity: 0,
            scale: 0,
            x: point.x - 4,
            y: point.y - 4,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          <div className={`
            w-2 h-2 rounded-full
            bg-gradient-to-r from-indigo-500 to-purple-500
            opacity-20 blur-sm
          `} />
        </motion.div>
      ))}

      {/* Main cursor */}
      <motion.div
        className="fixed pointer-events-none z-[60]"
        initial={{ opacity: 1 }}
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "tween",
          duration: 0,
          ease: "linear"
        }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute inset-0 w-24 h-24 -left-8 -top-8 rounded-full
            bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-indigo-500/20
            blur-md"
          initial={{ opacity: 0.3 }}
          animate={{
            scale: isPointer ? 1.2 : 1,
            opacity: isPointer ? 0.5 : 0.3,
            rotate: isPointer ? 180 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />

        {/* Main circle */}
        <motion.div 
          className="w-6 h-6 rounded-full 
            bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500
            opacity-30 blur-[2px]"
          animate={{
            scale: isPointer ? 1.5 : 1,
            rotate: 360,
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              type: "spring",
              stiffness: 400,
              damping: 30,
            }
          }}
        />

        {/* Border circle */}
        <motion.div 
          className="absolute top-0 left-0 w-6 h-6 rounded-full border-2 border-indigo-400"
          initial={{ opacity: 1 }}
          animate={{
            scale: isPointer ? 1.2 : 1,
            rotate: -360,
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              type: "spring",
              stiffness: 400,
              damping: 30,
            }
          }}
        />

        {/* Center dot */}
        <motion.div 
          className="absolute top-[11px] left-[11px] w-1 h-1 rounded-full bg-indigo-400"
          initial={{ opacity: 1 }}
        />
      </motion.div>
    </>
  );
} 