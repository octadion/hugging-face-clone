// app/spaces/components/SpacesHeader.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SpacesHeader() {
  // const [activeTab, setActiveTab] = useState('trending');

  // const tabs = [
  //   { id: 'trending', label: 'Trending' },
  //   { id: 'recent', label: 'Recent' },
  //   { id: 'most-liked', label: 'Most Liked' },
  // ];

  return (
    <header className="border-b dark:border-gray-700 bg-white dark:bg-dark-background">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">Spaces</h1>
        
        {/* <div className="flex space-x-4 border-b dark:border-gray-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                pb-2 
                ${activeTab === tab.id 
                  ? 'border-b-2 border-blue-500 text-blue-500' 
                  : 'text-gray-500 dark:text-gray-300'}
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div> */}
      </div>
    </header>
  )
}