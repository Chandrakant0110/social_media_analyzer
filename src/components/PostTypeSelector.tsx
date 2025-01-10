import React from 'react';
import { motion } from 'framer-motion';
import { PostType } from '../types/api';
import { Film, Images, Image } from 'lucide-react';

interface PostTypeSelectorProps {
  value: PostType;
  onChange: (value: PostType) => void;
  disabled: boolean;
}

const postTypes = [
  { value: 'reels', label: 'Reels', icon: Film },
  { value: 'carousel', label: 'Carousel', icon: Images },
  { value: 'static image', label: 'Static Image', icon: Image },
] as const;

export function PostTypeSelector({ value, onChange, disabled }: PostTypeSelectorProps) {
  return (
    <div className="w-full">
      <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
        Select Post Type
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {postTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = value === type.value;
          
          return (
            <motion.button
              key={type.value}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => !disabled && onChange(type.value as PostType)}
              disabled={disabled}
              className={`
                relative p-4 flex flex-col items-center gap-3 rounded-xl border-2 transition-all duration-200
                ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}
                ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-900/20'
                    : 'border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-700'
                }
              `}
            >
              <Icon className={`w-6 h-6 ${isSelected ? 'text-indigo-600' : 'text-gray-500'}`} />
              <span className={`font-medium ${isSelected ? 'text-indigo-600' : 'text-gray-700 dark:text-gray-300'}`}>
                {type.label}
              </span>
              
              {isSelected && (
                <motion.div
                  layoutId="outline"
                  className="absolute inset-0 rounded-xl border-2 border-indigo-600"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}