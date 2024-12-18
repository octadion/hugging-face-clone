// app/spaces/components/SpacesFilter.tsx
'use client';

import { useState } from 'react';
import { 
  Filter, 
  Search, 
  ChevronDown 
} from 'lucide-react';

export default function SpacesFilter() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="mb-4 flex items-center space-x-4">
      <div className="relative flex-grow">
        <input 
          type="text" 
          placeholder="Search spaces..." 
          className="
            w-full pl-10 pr-4 py-2 
            border rounded-md 
            dark:bg-gray-800 dark:border-gray-700 
            dark:text-white
          "
        />
        <Search 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" 
        />
      </div>

      <button 
        onClick={() => setShowFilters(!showFilters)}
        className="
          flex items-center 
          px-4 py-2 
          border rounded-md 
          dark:bg-gray-800 dark:border-gray-700 
          dark:text-white
        "
      >
        <Filter className="mr-2" />
        Filters
        <ChevronDown className="ml-2" />
      </button>

      {showFilters && (
        <div className="absolute z-10 mt-2 bg-white dark:bg-gray-800 border rounded shadow">
          {/* Filter options */}
        </div>
      )}
    </div>
  )
}