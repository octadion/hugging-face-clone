'use client';

import React from 'react';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="h-6 w-6 text-gray-600" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-500" />
      )}
    </button>
  );
};