'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import SpacesFilter from './components/SpacesFilter';
import SpacesCard from './components/SpacesCard';
import { fetchSpaces } from '../api/spaces/route';
import Link from 'next/link';

export default function SpacesPage() {
  const [spaces, setSpaces] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const data = await fetchSpaces(token);
        console.log(data)
        setSpaces(data);
      } catch (error) {
        console.error('Failed to fetch spaces:', error);
      }
    };

    fetchData();
  }, [router]);

  return (
    <div className="py-8">
      <SpacesFilter />

      {spaces.length === 0 ? (
        <div className="text-center text-gray-500 py-8">
          Tidak ada spaces tersedia.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {spaces.map(space => (
            <Link 
            href={`/spaces/${space.id}`}
            key={space.id}
            className="block"
          >
            <SpacesCard space={space} />
          </Link>
          ))}
        </div>
      )}
    </div>
  );
}
