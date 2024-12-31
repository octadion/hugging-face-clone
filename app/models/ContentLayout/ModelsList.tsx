// app/models/ContentLayout/ModelsList.tsx
"use client";
import { useState } from 'react'
import ModelCard from './ModelCard'
import { ModelsPagination } from './ModelsPagination'
import { ModelsHeader } from './ModelsHeader'
import { useModels } from '../hooks/useModels'

export default function ModelsList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  const { models, isLoading, error, pagination, setPage } = useModels({
    initialPage: currentPage,
    sort: sortBy,
    search: searchQuery
  })

  const handlePageChange = (newPage: number) => {
    setPage(newPage)
  }

  if (error) {
    return <div>Error loading Models: {error.message}</div>
  }

  return (
    <section className="pt-8 border-gray-100 col-span-full lg:col-span-6 xl:col-span-7 pb-12">
      <ModelsHeader 
        totalCount={pagination.totalItems}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <div className="relative">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-1 gap-5">
            {models.map((modelItem) => (
              <ModelCard key={modelItem.title} item={modelItem} />
            ))}
          </div>

        )}
      </div>
      <ModelsPagination 
        currentPage={pagination.currentPage}
        hasNext={pagination.hasNext}
        hasPrev={pagination.hasPrev}
        onPageChange={handlePageChange}
      />
    </section>
  )
}