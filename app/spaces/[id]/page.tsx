'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchSpaces } from 'app/api/spaces/route';
import { Space } from '../types';
import { Heart, Server, Layers, Settings } from 'lucide-react';

export default function SpaceDetailPage() {
  const params = useParams();
  const [space, setSpace] = useState<Space | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const apiKey = localStorage.getItem('apiKey');
    const storedTheme = localStorage.getItem('theme') || 'light';

    setTheme(storedTheme === 'dark' ? 'dark' : 'light');

    async function fetchSpaceDetails() {
      if (token) {
        const spaces = await fetchSpaces(token);
        const currentSpace = spaces.find((space) => space.id === params.id);

        if (currentSpace) {
          setSpace(currentSpace);
        }
      }

      setApiKey(apiKey);
    }

    fetchSpaceDetails();
  }, [params.id]);

  if (!space) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const embedUrl = new URL(space.url || '');
  if (apiKey) {
    embedUrl.searchParams.set('apiKey', apiKey);
  }
  embedUrl.searchParams.set('spaceId', space.id);
  embedUrl.searchParams.set('theme', theme);

  return (
    <div className={"flex flex-col h-screen bg-white text-black dark:bg-dark-background dark:text-white"}>
      {/* Header Tool Information (Only Right Side Information) */}
      <header className="bg-white text-black dark:bg-dark-background dark:text-white p-4">
        <div className="container mx-auto flex justify-end items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Heart className="text-gray-500 dark:text-gray-300" size={20} />
            <span>{space.likes}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Server className="text-gray-500 dark:text-gray-300" size={20} />
            <span>{space.author}</span>
          </div>

          <div className="flex items-center space-x-2">
            <Layers className="text-gray-500 dark:text-gray-300" size={20} />
            <span>{space.tags.join(', ')}</span>
          </div>
        </div>
      </header>

      {/* Gradio Embed */}
      <div className="flex-grow">
        <iframe
          src={embedUrl.toString()}
          className="w-full h-full border-none dark:bg-gray-900 bg-gray-100"
          allowFullScreen
        />
      </div>
    </div>
  );
}