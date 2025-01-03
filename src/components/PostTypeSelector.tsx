import React from 'react';
import { PostType } from '../types/api';

interface PostTypeSelectorProps {
  value: PostType;
  onChange: (value: PostType) => void;
  disabled: boolean;
}

export function PostTypeSelector({ value, onChange, disabled }: PostTypeSelectorProps) {
  return (
    <div className="w-full max-w-xs">
      <label htmlFor="post-type" className="block text-sm font-medium text-gray-700 mb-2">
        Select Post Type
      </label>
      <select
        id="post-type"
        value={value}
        onChange={(e) => onChange(e.target.value as PostType)}
        disabled={disabled}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
      >
        <option value="reels">Reels</option>
        <option value="carousel">Carousel</option>
        <option value="static image">Static Image</option>
      </select>
    </div>
  );
}