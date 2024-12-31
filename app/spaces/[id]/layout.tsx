// app/spaces/[id]/layout.tsx
import React from 'react'

export default function SpaceDetailLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-background">
      <main>
        {children}
      </main>
    </div>
  )
}