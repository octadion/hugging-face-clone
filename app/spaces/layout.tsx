// app/spaces/layout.tsx
import React from 'react'
import SpacesHeader from './components/SpacesHeader'

export default function SpacesLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-background">
      <SpacesHeader />
      <main className="container mx-auto px-4">
        {children}
      </main>
    </div>
  )
}